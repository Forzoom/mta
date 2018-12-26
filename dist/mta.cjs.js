'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// 腾讯移动分析接口。处理NODE_ENV，只在production环境下进行统计
function isUndef(v) {
    return v === null || v === undefined;
}
function rawClickStat(id, params, name) {
    if (name in window) {
        // @ts-ignore
        window[name].clickStat(id, params);
        return true;
    }
    else {
        console.log("[" + name + " warning] MtaH5 is lost");
        return false;
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
var Factory = /** @class */ (function () {
    function Factory(name) {
        /** 插件数组 */
        this.plugins = [];
        this.name = name;
    }
    Factory.prototype.clickStat = function (id, params) {
        var result = rawClickStat(id, params, this.name);
        var len = this.plugins.length;
        if (result && len > 0) {
            for (var i = 0; i < len; i++) {
                this.plugins[i](id, params);
            }
        }
        return result;
    };
    Factory.prototype.clickStatEqual = function (id, params, test, value) {
        return rawClickStatEqual(id, params, test, value, this.name);
    };
    Factory.prototype.clickStatNotEqual = function (id, params, test, value) {
        return rawClickStatNotEqual(id, params, test, value, this.name);
    };
    Factory.prototype.clickStatNotNull = function (id, params, test) {
        return rawClickStatNotNull(id, params, test, this.name);
    };
    /**
     * 为true时触发
     */
    Factory.prototype.clickStatTrue = function (id, params, test) {
        return rawClickStatTrue(id, params, test, this.name);
    };
    /** 添加插件 */
    Factory.prototype.use = function (plugin) {
        this.plugins.push(plugin);
    };
    return Factory;
}());
/**
 * factory
 * @param {string} name Mta对象的名字
 */
function factory(name) {
    return new Factory(name);
}
var MtaH5 = factory('MtaH5');
var clickStat = MtaH5.clickStat;
var clickStatEqual = MtaH5.clickStatEqual;
var clickStatNotEqual = MtaH5.clickStatNotEqual;
var clickStatNotNull = MtaH5.clickStatNotNull;
var clickStatTrue = MtaH5.clickStatTrue;
var use = MtaH5.use;

exports.factory = factory;
exports.clickStat = clickStat;
exports.clickStatEqual = clickStatEqual;
exports.clickStatNotEqual = clickStatNotEqual;
exports.clickStatNotNull = clickStatNotNull;
exports.clickStatTrue = clickStatTrue;
exports.use = use;
