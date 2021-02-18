学习笔记

一、有限状态机

    1.状态机以函数实现对各个状态之间的互相转换来实现对应需求，过程中思路十分清晰。

二、http 请求

    1.先通过node  http 模块创建一个服务端,实现接收和响应http请求。
    2.创建request类实现对传入config配置的初始化。
    3.通过net.createConnection创建TCP连接与服务端连接。
    4.利用状态机模式处理response中的headers信息
