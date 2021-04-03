学习笔记

一、组件化的基础知识

    1.组件基本组成:state,children,attribute,method,property,event
    2.JSX核心利用dom Api 创建节点并将节点的属性全部装载到元素对象，最后挂载到dom页面中。

二、轮播组件

    1.dom api创建元素展示在页面中
    2.定时器循环轮播图片
    3.鼠标拖拽轮播图

```
    this.root.addEventListener('mousedown'event=>{
        console.log('mousedown');
        let move = event =>{
            console.log('mousemove');
        }
        let up = event =>{
            console.log('mouseup');
            document.removeEventListener('mousemove',move);
            document.removeEventListener('mouseup',up);
        }

        document.addEventListener('mousemove',move);
        document.addEventListener('mouseup',up);
    })
```
