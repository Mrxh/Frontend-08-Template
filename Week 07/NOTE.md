学习笔记

一、运算符和表达式

    1.Member 运算符从右开始运算
    2.new运算符高于 ()
    3.引用类型Reference(标准中类型)
    4.大多数运算符会进行类型转换后再计算，如 + - * / === !==
    5.**运算符在没括号情况下右优先
    6.三目运算符 ? : 存在短路原则

二、类型转换

    1.7种基本数据类型之间都存在互相转换
    2.存在装箱操作的几种数据类型：Number,String,Boolean,Symbol

三、运行时相关概念

    1.js语句：简单语句，复合语句，声明
    2.完成类型：normal,return,throw,break,continue

四、简单语句与复合语句

    1.简单语句: expression,empty,debugger,throw,continue,break,return
    2.复合语句: block,if,switch,iteration,with,labelled,try
    3.try{}catch{}finally{} try中执行return语句，finally块最终依然会执行

五、声明

    1.声明类型: funtion ,function*,async function,async funxction*,var,class,let,const
    2.所有的声明都会预处理
    3.{}可快速构建稳定的作用域

六、宏任务与微任务

    1.宏任务：传给js引擎的任务
      微任务：js引擎内部的任务（promise）
    2.事件循环就是宏任务和微任务不断变换执行的过程

七、js 函数调用

    1.函数调用为栈式调用
    2.Realm：存所有内置对象
