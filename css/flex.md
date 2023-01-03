# flex-basis
元素在弹性盒子项目主轴上占据的尺寸,优先级大于width,可以被如下属性所影响
# flex-grow
当弹性盒子主轴上如果有额外的空间, 通过该属性计算项目在额外空间的占比
## code
```css
{
  flex-grow: 1
}
```
## 计算逻辑
```
size = (grow / sum(grow)) * extra-space + origin
origin: 原始尺寸（通过flex-basis设置）
grow: flex-grow设置的值
sum（grow）: 容器中所有的flex-grow之和
extra-space: 剩余尺寸（总尺寸减去所有的项目尺寸与gap）
```
# flex-shrink
当弹性盒内部元素尺寸之和大于盒子自身尺寸时，通过shrink来计算缩小比例
## code
```css
{
  /* 项目在主轴保持原有尺寸，不缩小 */
  flex-shrink: 0
}
```
## 代码示例
[link](flex-example.html)