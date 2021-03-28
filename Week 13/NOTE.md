学习笔记

一、html 定义，标签，语法

    1.各标记预言之间的关系: (SGML(XML)(HTML))(HTML5)
    2.html语义化: 根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。
    3.html合法元素: element,text,comment,documentType,ProcessingInstructio,CDATA

二、浏览器 API

    1.事件捕获: 事件从最不精确的对象(document 对象)开始触发，然后到最精确(也可以在窗口级别捕获事件，不过必须由开发人员特别指定)。
    2.事件冒泡: 事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发。
    3.Node:element+document+characterData+DocumentFragment+DocumentType
    4.Range: 一个Range对象代表页面上一段连续区域,通过Range对象，可以获取或修改网页上的任何区域。
    5.cssom: document.styleSheets
