// 腾讯移动分析接口。处理NODE_ENV，只在production环境下进行统计

function isUndef(v) {
    return v === null || v === undefined;
}

function rawClickStat(id, params, name) {
    if (name in window) {
        window[name].clickStat(id, params);
    } else {
        console.log(`[${name} warning] MtaH5 is lost`);
    }
}

// 指定Key的值是Value的时候发送
function rawClickStatEqual(id, params, test, value, name) {
    if (test === value) {
        rawClickStat(id, params, name);
        return true;
    }
    return false;
}

// !== 
function rawClickStatNotEqual(id, params, test, value, name) {
    if (test !== value) {
        rawClickStat(id, params, name);
        return true;
    }
    return false;
}

// 只有确实是true的情况才可以
function rawClickStatTrue(id, params, test, name) {
    return rawClickStatEqual(id, params, test, true, name);
}

// not null
function rawClickStatNotNull(id, params, test, name) {
    return rawClickStatTrue(id, params, !isUndef(test), name);
}

export function factory(name) {
    return {
        clickStat: function(id, params) {
            return rawClickStat(id, params, name);
        },
        clickStatEqual: function(id, params, test, value) {
            return rawClickStatEqual(id, params, test, value, name);
        },
        clickStatNotEqual: function(id, params, test, value) {
            return rawClickStatNotEqual(id, params, test, value, name);
        },
        clickStatNotNull: function(id, params, test) {
            return rawClickStatNotNull(id, params, test, name);
        },
        clickStatTrue: function(id, params, test) {
            return rawClickStatTrue(id, params, test, name);
        },
    }
}

const MtaH5 = factory('MtaH5');

export const clickStat = MtaH5.clickStat;
export const clickStatEqual = MtaH5.clickStatEqual;
export const clickStatNotEqual = MtaH5.clickStatNotEqual;
export const clickStatNotNull = MtaH5.clickStatNotNull;
export const clickStatTrue = MtaH5.clickStatTrue;