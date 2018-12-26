interface ClickStatParams {
	[propName: string]: any,
}
interface ClickStatCollection {
	clickStat(id: string, params: ClickStatParams, name: string): void
	clickStatEqual(id: string, params: ClickStatParams, test: any, value: any, name: string): boolean
	clickStatNotNull(id: string, params: ClickStatParams, test: any, value: any, name: string): boolean
	clickStatNotEqual(id: string, params: ClickStatParams, test: any, name: string): boolean
	clickStatTrue(id: string, params: ClickStatParams, test: any, name: string): boolean
	use(plugin: PluginFunction): void;
}
/** 插件 */
interface PluginFunction {
	(id: string, params: ClickStatParams): void;
}
declare function clickStat(id: string, params: ClickStatParams): void
declare function clickStatEqual(id: string, params: ClickStatParams, test: any, value: any): boolean
declare function clickStatNotNull(id: string, params: ClickStatParams, test: any, value: any): boolean
declare function clickStatNotEqual(id: string, params: ClickStatParams, test: any): boolean
declare function clickStatTrue(id: string, params: ClickStatParams, test: any): boolean
declare function factory(name: string): ClickStatCollection