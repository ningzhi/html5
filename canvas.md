Title:使用canvas+javascript画圆形进度条

[TOC]

#介绍

## canvas

\<canvas>是HTML5新添画布元素，它的属性有两个**width**和**height**，顾名思义一个宽一个高，其实canvas本身是没有绘画功能的，绘画的制作是在javascript中完成的，而canvas只是为绘画提供了一个**图形容器**。


##javascript

javascript是一个轻量级的脚本语言，常常用来与页面进行互动，是纯静态页面也能变得丰富起来。javascript常常用于验证表单、检测浏览器、创建cookies，以及更多的应用。


#效果图
(请忽略它的丑样子！！！)
![进度条](images/c.jpg)

##整体分析
好的下面让我们来分析一下整个进度条的全部组成部分。
我们将它分成三个同心圆，这样就好理解了，首先，是最外面的灰色部分它其实是一个完整的圆形，其次是里面的红色部分，它是一个以**圆心为起点**的扇形，也就是一个不完整的圆形，然后最里面的白色也是一个小小的圆形，这样将他们三个放在一起就是我们平时所看到的圆形进度条啦。
![第一个圆](images/cir1.jpg)+![第二个圆](images/cir2.jpg)+![第三个圆](images/cir3.jpg)



##canvas.html
这里比较好写，现在文档中导入所需要用的javascript脚本，然后创建好一个画布就ok啦~
```html
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>圆形进度条</title>
    <script type="text/javascript" src="script.js">
    </script>
</head>
<body onload="draw()">
<canvas id="draw" width="400" height="400"></canvas>
</body>
</html>
```
给画布元素定义好宽高，设置好id，这个id就是相当于canvas的身份证，我们一会使用javascript获取它是就用到它了。**onload**是html的事件属性，表示当页面加载完毕之后所触发的事件。而事件里引用的函数就是javascript中我们绘制图形的函数名。


##script.js

在创建绘画之前我们要知道圆形要怎么画，首先在javascript中画圆形与我们平时所知道的圆形有些不同。
坐标如图：
![坐标图](images/circle.jpg)
如果明白了坐标的话，其次我们要知道javascript中画圆形所使用的函数。
```javascript
  arc(x, y, radius, startAngle, endAngle, counterclockwise);
```
前两个属性值表示圆心的X、Y坐标位置，radius属性值表示圆的半径大小，startAngle、endAngle分别表示圆形的起始位置和结束位置，counterclockwise表示绘制是顺时针（false）还是逆时针（true）。
了解了这些我们就能画的很轻松了。

1.通过getElementById获取到html的canvas元素节点：
```javascript
var can=document.getElementById('draw');
```
2.创建context对象：
```javascript
 var con=can.getContext('2d');
```
getContext('2d')对象是HTMl5的内置对象，它可以拥有多种图形的绘制方法。
3.在画布中绘制一个区域
```javascript
 con.fillStyle="#fff";
 con.fillRect(0,0,400,400);
```
fillStyle属性是渲染方式，fillRect定制了位置以及形状和尺寸大小。它的四个属性值分别表示：左上角X的坐标、左上角Y的坐标、绘制矩形的宽度、绘制矩形的高度。
4.绘制圆形

4.1第一个圆形

```javascript
con.beginPath();
    con.arc(100,100,90,0,Math.PI*2);
    con.closePath();
    con.fillStyle="#ddd";
    con.fill();
```
效果图：
![](images/cir1.1.jpg)
4.2最重要滴，扇形的绘制
```javascript
  con.beginPath();
    con.moveTo(100,100);
    con.arc(100,100,90,1.5*Math.PI,0.56*Math.PI);
    con.closePath();
    con.fillStyle="red";
    con.fill();
```
效果图：
![](images/cir1.2.jpg)
**注意：在绘制同心圆的扇形时一定要将坐标原点移动到圆心位置，要不然是画不出来的！**
4.3最后一个圆形
```javascript
  con.beginPath();
    con.arc(100,100,70,0,Math.PI*2);
    con.closePath();
    con.fillStyle="#fff";
    con.fill();
```
效果图：
![](images/cir1.3.jpg)
就这样一个圆形的进度条就画成啦~
5.在圆形中间添加字体
采用文本绘制的属性及方法
```javascript
  con.font="bold 20px Arial";
    con.fillStyle="#FF9F17";
    con.textAlign="center";
    con.textBaseline="middle";
    con.fillText("75%",100,100);
```
效果图：
![](images/c.jpg)


这样一个基于canvas和javascript的圆形进度条就画完了。