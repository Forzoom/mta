### Usage

1. clickStat(id, params) 
	触发clickStat
1. clickStatEqual(id, params, test, value) 
	只有在test === value情况下触发
1. clickStatNotNull(id, params, test) 
	只有在test !== null情况下触发
1. clickStatTrue(id, params, test) 
	只有在test === true情况下触发
1. clickStatNotEqual(id, params, test, value) 
	只有在test !== value情况下触发

### Version

#### 0.0.2

1. 添加clickStatNotEqual

#### 0.0.3

1. 优化代码