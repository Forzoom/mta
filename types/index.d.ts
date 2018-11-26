declare module '@forzoom/mta' {
	interface ClickStatParams {
		[propName: string]: any,
	}
	interface ClickStatCollection {
		clickStat(id: string, params: ClickStatParams, name: string): void
		clickStatEqual(id: string, params: ClickStatParams, test: any, value: any, name: string): boolean
		clickStatNotNull(id: string, params: ClickStatParams, test: any, value: any, name: string): boolean
		clickStatNotEqual(id: string, params: ClickStatParams, test: any, name: string): boolean
		clickStatTrue(id: string, params: ClickStatParams, test: any, name: string): boolean
	}
	function clickStat(id: string, params: ClickStatParams): void
	function clickStatEqual(id: string, params: ClickStatParams, test: any, value: any): boolean
	function clickStatNotNull(id: string, params: ClickStatParams, test: any, value: any): boolean
	function clickStatNotEqual(id: string, params: ClickStatParams, test: any): boolean
	function clickStatTrue(id: string, params: ClickStatParams, test: any): boolean
	function factory(name: string): ClickStatCollection
}