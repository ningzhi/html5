Title:HTML5新添语义标签


[TOC]



# HTML5

HTML5是2014年10月由万维网联盟[w3c](https://www.w3.org/)完成标准制定。目标是替换1999年所制定的HTML 4.01和XHTML 1.0标准。HTML5中添加了很多新的标签，而新增加的语义化标签，更是体现了超文本标记语言的**人性化**和**明确化**。


# 新增语义标签

## section

section是一个**通用文档**，所定义的模块就是具有明确意义的一块区域，在整个文档中它拥有自己独自的内容，例如我想要做一个美食的页面，根据不同类别的食物 可以将整个页面分为不同的“区域”，而这每一个区域都会有她自己独特的内容，在html4中我们划分页面主要使用的是[div](https://www.w3school.com.cn/tags/tag_div.asp/),而<section>就是比<div>更加具 有语义性的区域块。
```markdown
        <html>
    <title>HTML5语义化标签</title>
</head>
<body>
        <section id="meat">
       </section>
        <section id="vegetables">
        </section>
        <section id=" fruit">
        </section>
        <section id=" cereal">
        </section>
</body>
</html>
```


## article

article是一个**自包含的内容块**，主要应用于文章内容。一篇文章应有其自身的意义，应该有可能独立于站点的其余部分对其进行分发。
article的主要内容包括：
* 新闻
* 博客文章
* 论坛
```html
<article>
  <h1>文章标题</h1>
  <p>文章内容.....</p>
</article>
```

## aside

aside适用于**页面主结构之外**的大块内容，比如文章的旁注，可以在使用<article>是一同使用<aside>用作文章的注释。也可以添加后来的内容


## header

header可以与<section>和<article>一起使用，表示该区域快的页眉，放在元素的最前面。在<header>元素中只能包含**一个**(<h1>--<h6>)，还可以包括<hgroup>和<nav>（这两个下面会说到）、内容表格、搜索表单、相关标志等，要注意的是：**不能再包含<header>和<footer>**。

## footer

一篇完整的文章或者完整的区域块有了页眉当然要用页脚，footer就是元素的页脚，放在<section>、<article>、<div>元素的最小面。页脚不难理解，有时候有的人认为一个页面上只能有一个页脚其实不然，只要是页面中的一个完整的节都可以拥有自己的页脚。



## hgroup

hgroup元素的作用是，将header中的标题进行归组，而且只能包含(<h1>--<h6>)。对于建立大纲有很大的帮助。


## nav

nav元素很好理解，看字面的意思就是导航。它用于导航和链接，不过不只只是单个的链接，当你拥有一组链接时就可以使用nav，它常常用于页面的导航栏。**但是一定要记住不要用于段落中的导航**
```html
<nav>
<a href="home.html">Home</a>
<a href="first.html">First</a>
<a href="second">Second</a>
</nav>
```


## address

这个元素的主演作用是展示联系信息。包括文档作者的邮箱、地址、电话信息等常常放在footer中使用，文章中的相关任务的联系信息等。该元素默认显示为斜体。


## progress

进度条元素，这个是我本人很喜欢的一个元素，有了它在网页中想展示一些直观的数据简直是太方便了，这个元素用两个属性**Value**和**Max**，顾名思义value表示的是当前已经完成的工作量，max表示全部的工作量。value一定不能大于max哟！
```html
<progress value="50" max="100">
</progress>
```
上面的简单代码就可以制作一个进度条，每个浏览器的默认显示效果不同，可以通过css和javascript得到非常不错的效果。

## mark

mark元素用作单词标记，主要用于突出显示，常与搜索引擎一起使用
```html
<p> <mark>mark</mark>是用来标记单词的</p>
```
显示效果是高亮显示。
#总结

HTML5在原有的标记语言的基础上增添了很多元素，这些只是其中的一小部分，有兴趣的可以去[W3school](www.w3school.com)了解更多内容，HTML5现在使用的越来越广泛无论是web前端还是移动前端都取得了很大的成功，同时新添的很多例如canvas画布元素与javascript的强大结合，使HTMl不再只是”标记语言“了。更多的好玩有趣的功能在等着我们去探索挖掘。