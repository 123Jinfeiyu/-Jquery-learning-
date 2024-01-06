# Ajax与jQuery使用

##  Ajax

AJAX 是前后台交互的能力,也就是我们客户端给服务器发送信息的工具  以及接受响应的工具, 也就是用JavaScript执行异步请求

- 同步访问：当客户端向服务器发送请求时，服务器在处理的过程中，浏览器只能等待，效率较低

- 异步访问：当客户端向服务器发送请求时，服务器在处理的过程中，客户端可以做其他的操作，不需要一直等待

```js
// 创建ajax的实例 
let xhr = new XMLHttpRequest();
```

```js
//创建请求 (挂请求的信息 内容等 )
 xhr.open('GET', 'https://zj.v.api.aa1.cn/api/Age-calculation/?birthday=2000-10-27')
//xhr.open(请求方式,地址)
```

```js
//发送请求
xhr.send();
```

```js
// 拿数据  xhr.response 
xhr.onload = function(){
    //判断是否成功的状态码 200
    if(xhr.status === 200){
        let data = JSON.parse(xhr.response)
        console.log(data);

        let span = document.createElement('span');
        let span1 = document.createElement('span');
        let p1 = document.createElement('p');
        span.innerHTML = '年龄:' + data.age + '<br>';
        span1.innerHTML = '生肖:' + data.animal;
        p1.innerHTML = '星座:' + data.constellation;
        //插入到页面中显示
        document.body.appendChild(span)
        document.body.appendChild(span1)
        document.body.appendChild(p1)
    }
}
```

## jQuery介绍

> jQuery是JavaScript的工具库，对原生JavaScript中的DOM操作、事件处理、包括数据处理和Ajax技术等进行封装,提供更完善，更便捷的方法。

**1. 引入jquery文件:**

- https://www.bootcdn.cn/

```js
<!-- 引入网页版jquery文件  -->
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.js"></script>
```

**2.工厂函数 - $()**

"$()"函数用于获取元素节点，创建元素节点或将原生JavaScript对象转换为jquery对象,返回 jQuery 对象。jQuery对象实际是一个类数组对象，包含了一系列 jQuery操作的方法。

原生JavaScript对象与jQuery对象的属性和方法不能混用。可以根据需要，互相转换 :

- 原生JavaScript转换jQuery对象

  > $(原生对象)，返回 jQuery 对象

- jQuery对象转换原生JavaScript对象

  > 方法一 : 根据下标取元素,取出即为原生对象 var div = $("div")[0];
  >
  > 方法二 : 使用jQuery的get(index)取原生对象 var div2 = $("div").get(0);

  

**3.jQuery获取元素**

jQuery通过选择器获取元素，$("选择器")

```js
标签选择器：$("div")
ID 选择器：$("#d1")
类选择器：$(".c1")
群组选择器：$("body,p,h1")
后代选择器： $("div .c1")
子代选择器： $("div>span")
```

**4.操作元素内容**

```js
// 设置或读取标签内容,等价于原生innerHTML,可识别标签语法
$('').html() 

// 设置或读取标签内容,等价于innerText,不能识别标签
$('').text() 

// 设置或读取表单元素的值,等价于原生value属性
$('').val()  
```

**5.操作标签属性**

1. attr("attrName","value")
   设置或读取标签属性
2. prop("attrName","value")
   设置或读取标签属性
3. removeAttr("attrName")
   移除指定属性

> 注意 :在设置或读取元素属性时,attr()和prop()基本没有区别;但是在读取或设置表单元素(按钮)的选中状态时,必须用prop()方法,attr()不会监听按钮选中状态的改变,只看标签属性checked是否书写

**6.操作标签样式**

针对类选择器,提供操作class属性值的方法

```js
// 添加指定的类名
addClass("className")	
// 移除指定的类型,如果参数省略,表示清空class属性值
removeClass("className")
// 如果当前元素存在指定类名,则移除;不存在则添加
toggleClass("className")
```

操作行内样式

```js
// 设置行内样式
css("属性名","属性值")  

// 设置一组CSS样式
css(对象)		
```

**7.元素的创建,添加 删除**

1. 创建：使用$("标签语法")，返回创建好的元素

```javascript
//创建个新的 span标签 
let span = $('<span></span>');

//设置内容和添加个类名 再加个颜色
span.html('我是刚动态创建的span').attr('class','text').css('color','pink')
```

2. 作为子元素添加

```js
//添加到我的div标签里面  作为最后一个子元素添加
$('div').append(span)

//添加到我的div标签里面  作为第一个子元素添加
$('div').prepend(span)
```

   3.作为兄弟元素添加

```js
//before() 作为兄弟元素在div的最前面插入
$('div').before(span)

//after() 作为兄弟元素在div的最后面插入
$('div').after(span)
```

   4.移除元素 

```js
//删除元素
$('span').remove();	
```

**8.动画效果**

1.显示和隐藏

```js
//隐藏
$('div').hide(1000,function(){
    
})

//显示 
$('div').show(1000,function(){
    
})
//第一个参数 是接收动画事件   
//第二个参数 要执行的函数
```

2.通过使用滑动下拉和上推效果，显示隐藏的被选元素（ **只针对块元素** ）

```js
//上推
$('div').slideUp(1000,function(){
    
})

//下拉
$('div').slideDown(1000,function(){
    
})
```

3.通过使用淡隐淡现方式显示效果，显示隐藏的被选元素

```js
//淡隐
$('div').fadeOut(1000,function(){
    
})

//淡现
$('div').fadeIn(1000,function(){
    
})
```

 **9.数据与对象遍历**

1.$(selector).each() 方法规定为每个匹配元素规定运行的函数

```js
$(selector).each(function(index,element){})
```

必需。为每个匹配元素规定运行的函数。

- *index* - 选择器的 index 位置
- element - 当前的元素

```js
 //遍历下列数组
 let arr = ['封夕','爱吃','小熊','蛋糕'];
 $(arr).each(function (index,item) {
 	console.log(index,item);
 })
```

2.$.each()函数是框架提供的一个工具类函数，通过它，你可以遍历对象、数组的属性值并进行处理

```js
$.each(Object, function(index, data){});
```

必需。为每个匹配元素规定运行的函数。

- *index* - 选择器的 index 位置
- data- 当前的数据

```js
//创建个对象 
let obj={
    name: '无限',
    age:18,
    game:'英雄联盟'
};
//用each()方法遍历出来每一项
$.each(obj,function(index,date){
	console.log(index,date);
})
```

**10.jQuery事件绑定方式:**

```js
//绑定点击事件 
$("div").on("click",function(){});

$("div").click(function(){});  
```

