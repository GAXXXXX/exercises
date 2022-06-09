<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-01-19 21:02:12
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-05-10 23:37:43
-->

# :checked~和:checked+
- :checked~
  - 作用于checkbox后的所有兄弟节点
- :checked+
  - 作用于checkebox后的第一个兄弟节点

# 选择器
- （1） *:选择任何HTML标签
- （2） 标签属性
- （3） 伪类
- （4） >:选择第一层，只选择亲儿子
- （5） +:作用于**第一个相邻的兄弟节点**
- （6） ~:作用于之后的**所有兄弟节点**
- （7） 后代选择器:中间加空格，可以选择其子元素，孙子元素等
- ......

# 常用CSS单位
- px
- em
  - 相对于父级元素的大小
- rem(root em)
  - 相对于根元素的大小
- vw/vh
  - 相对于可视区的大小
- vmax/vmin
  - （旋转屏幕时）

# text-align
- 能让**行内元素、行内块元素**实现水平居中

# 让文字在一行显示，超出的部分显示...
```CSS
/* 设置文字在一行显示 */
white-space: nowrap;
overflow: hidden;
/* 设置文字超出时用...显示,需要与overflow:hidden;一起使用 */
text-overflow: ellipsis;
```

# ntd-child()的计算公式
- 1、数字
- 2、odd/even  奇数/偶数
- 3、n的倍数
- 4、2n/2n+1  奇数/偶数
- 5、n+t  --  从t开始(包括t)
    -n+t  --  前t个(包括t)

# 伪类元素(before,after)属于行内元素