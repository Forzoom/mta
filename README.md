### Api

#### clickStat(id, params): void
- 参数
	- id: string
	- params: any

触发clickStat

#### clickStatEqual(id, params, test, value): boolean
- 参数
	- id: string
	- params: any
	- test: any
	- value: any
- 返回值 `是否触发clickStat`

只有在test === value情况下触发

#### clickStatNotNull(id, params, test): boolean
- 参数
	- id: string
	- params: any
	- test: any
- 返回值 `是否触发clickStat`

只有在test !== null情况下触发

#### clickStatTrue(id, params, test): boolean
- 参数
	- id: string
	- params: any
	- test: any
- 返回值 `是否触发clickStat`

只有在test === true情况下触发

#### clickStatNotEqual(id, params, test, value): boolean
- 参数
	- id: string
	- params: any
	- test: any
	- value: any
- 返回值 `是否触发clickStat`

只有在test !== value情况下触发

#### factory(name)
- 返回值: `ClickStatCollection`

其中

	interface ClickStatCollection {
		clickStat(id:string, params: any): void;
		clickStatEqual(id: string, params: any, test: any, value: any): boolean;
		clickStatNotNull(id: string, params: any, test: any): boolean;
		clickStatTrue(id: string, params: any, test: any): boolean;
		clickStatNotEqual(id: string, params: any, test: any, value: any): boolean;
	}
