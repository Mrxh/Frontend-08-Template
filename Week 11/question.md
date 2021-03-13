为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

因为 first-letter 是作用于单一的字符，float 浮动元素不影响 first-letter 本身的作用，first-line 则是作用于一行,float 浮动元素会影响 first-line 的元素布局。
