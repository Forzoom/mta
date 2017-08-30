// 腾讯移动分析接口。处理NODE_ENV，只在production环境下进行统计

function isUndef(v) {
    return v === null || v === undefined;
}

const supportMtaH5 = 'MtaH5' in window;
const isProduction = process.env.NODE_ENV === 'production';

// todo: 这里的提示会被删除
if (process.env.NODE_ENV !== 'production') {
    console.log('[MtaH5 info] MtaH5 is disabled');
}
function clickStat(id, params) {
    if (isProduction) {
        if (supportMtaH5) {
            MtaH5.clickStat(id, params);
        } else {
            console.log('[MtaH5 warning] MtaH5 is lost');
        }
    }
}

// 指定Key的值是Value的时候发送
function clickStatEqual(id, params, test, value) {
    if (test === value) {
        clickStat(id, params);
        return true;
    }
    return false;
}

// !== 
function clickStatNotEqual(id, params, test, value) {
    if (test !== value) {
        clickStat(id, params);
        return true;
    }
    return false;
}

// 只有确实是true的情况才可以
function clickStatTrue(id, params, test) {
    return clickStatEqual(id, params, test, true);
}

// not null
function clickStatNotNull(id, params, test) {
    return clickStatTrue(id, params, !isUndef(test));
}

export {
    clickStat,
    clickStatEqual,
    clickStatNotEqual,
    clickStatNotNull,
    clickStatTrue,
};
export default clickStat;