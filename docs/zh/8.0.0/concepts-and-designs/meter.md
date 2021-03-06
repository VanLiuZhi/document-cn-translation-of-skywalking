# 仪表系统
仪表系统是另一种流计算模式，特别是对于度量标准数据。 在 [观测分析语言](oal.md)中, 有明确的 
[范围 定义](scope-definitions.md), 包含原生对象。 仪表系统专注于数据类型本身，并为最终用户提供更大的灵活性来定义范围实体。

仪表系统对后端的不同接收器开放，请参阅[后端设置文档](../setup/backend/backend-setup.md) 以获取更多详细信息。

仪表系统中声明的每个指标应包括以下属性
1. **指标名称**。 全局唯一名称，应避免与OAL变量名称重复。
2. **函数名称**。 用于该指标的函数，基于该函数实现的分布式聚合，值计算和采样计算。同样，数据结构也由函数确定，例如Avg函数返回Long型。
3. **范围类型**。 与 观测分析语言 中不同, 在仪表系统中存在很多逻辑范围定义, 只要求类型可以使用。
类型值包括服务，实例和端点，就像我们在概述中介绍的那样。
当使用指标数据值生成指标数据时，需要范围实体名称的值，例如服务名称。

注意，必须在引导阶段声明指标，而运行阶段无法更改。

仪表系统支持以下绑定功能
- **avg**。计算具有相同度量标准名称的每个实体的平均值。
- **histogram**。 汇总可配置存储桶中的计数，存储桶是可配置的，但必须在声明阶段分配。
- **percentile**.。阅读 [percentile的维基百科解释](https://en.wikipedia.org/wiki/Percentile). 与OAL不同，我们默认提供50/75/90/95/99；
在仪表系统功能中，百分位数功能接受多个等级，其等级应在（0，100）范围内。
