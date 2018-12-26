// 腾讯移动分析接口。处理NODE_ENV，只在production环境下进行统计

function isUndef(v: any): v is (null | undefined) {
    return v === null || v === undefined;
}

function rawClickStat(id: string, params: ClickStatParams, name: string): boolean {
    if (name in window) {
        // @ts-ignore
        window[name].clickStat(id, params);
        return true;
    } else {
        console.log(`[${name} warning] MtaH5 is lost`);
        return false;
    }
}

// 指定Key的值是Value的时候发送
function rawClickStatEqual(id: string, params: ClickStatParams, test: any, value: any, name: string): boolean {
    if (test === value) {
        rawClickStat(id, params, name);
        return true;
    }
    return false;
}

// !== 
function rawClickStatNotEqual(id: string, params: ClickStatParams, test: any, value: any, name: string): boolean {
    if (test !== value) {
        rawClickStat(id, params, name);
        return true;
    }
    return false;
}

// 只有确实是true的情况才可以
function rawClickStatTrue(id: string, params: ClickStatParams, test: any, name: string): boolean {
    return rawClickStatEqual(id, params, test, true, name);
}

// not null
function rawClickStatNotNull(id: string, params: ClickStatParams, test: any, name: string): boolean {
    return rawClickStatTrue(id, params, !isUndef(test), name);
}

class Factory {
    /** Mta对象的名称 */
    public name: string;
    /** 插件数组 */
    public plugins: PluginFunction[] = [];
    constructor(name: string) {
        this.name = name;
    }

    public clickStat(id: string, params: ClickStatParams): boolean {
        const result = rawClickStat(id, params, this.name);
        const len = this.plugins.length;
        if (result && len > 0) {
            for (let i = 0; i < len; i++) {
                this.plugins[i](id, params);
            }
        }
        return result;
    }
    public clickStatEqual(id: string, params: ClickStatParams, test: any, value: any): boolean {
        return rawClickStatEqual(id, params, test, value, this.name);
    }
    public clickStatNotEqual(id: string, params: ClickStatParams, test: any, value: any): boolean {
        return rawClickStatNotEqual(id, params, test, value, this.name);
    }
    public clickStatNotNull(id: string, params: ClickStatParams, test: any): boolean {
        return rawClickStatNotNull(id, params, test, this.name);
    }
    /**
     * 为true时触发
     */
    public clickStatTrue(id: string, params: ClickStatParams, test: any): boolean {
        return rawClickStatTrue(id, params, test, this.name);
    }
    /** 添加插件 */
    public use(plugin: PluginFunction): void {
        this.plugins.push(plugin);
    }
}

/**
 * factory
 * @param {string} name Mta对象的名字
 */
export function factory(name: string): ClickStatCollection {
    return new Factory(name);
}

const MtaH5 = factory('MtaH5');

export const clickStat = MtaH5.clickStat.bind(MtaH5);
export const clickStatEqual = MtaH5.clickStatEqual.bind(MtaH5);
export const clickStatNotEqual = MtaH5.clickStatNotEqual.bind(MtaH5);
export const clickStatNotNull = MtaH5.clickStatNotNull.bind(MtaH5);
export const clickStatTrue = MtaH5.clickStatTrue.bind(MtaH5);
export const use = MtaH5.use.bind(MtaH5);