# Skeleton 骨架屏实现
> 参考自 [element-ui](https://element.eleme.cn/#/zh-CN/component/skeleton)

## Core
1. line-gradient 确定骨架屏的基础颜色与动画效果颜色 
2. 通过 background-size 放大背景渐变色，结合动画改变 background-position 实现扫描效果

### line-gradient 使用说明
#### 90 deg
将渐变的效果移动90度
### #fff 30%
从渐变起始处的 30% 距离开始使用 #fff 颜色