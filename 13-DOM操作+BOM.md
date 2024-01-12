# DOM与BOM

## 1.初始DOM

DOM全称为 “Document Object Model”，文档对象模型，提供操作HTML文档的方法。（注：每个html文件在浏览器中都视为一篇文档,操作文档实际就是操作页面元素。）

当网页加载时，浏览器就会自动创建当前页面的文档对象模型（DOM）。在DOM中，文档的所有部分（例如元素、属性、文本等）都会被组织成一个树结构（类似于族谱），树中每一个分支的终点称为一个节点，每个节点都是一个对象。

![](./dmo树.png)



## 2.获取节点

> 要操作元素 标签 肯定是先要获取到它 , 使用DOM提供的一个全局内置对象`document`，要操作HTML标签，我们可以调用`document`对象中的各种方法来获取页面中的标签（在js中我们可以称之为 **元素** 或者 **节点**）

##### getElementById: 通过元素id名来获取到对应的标签 

```js
 document.getElementById('id'); //例如: box
```

##### getElementsByClassName: 通过类名(ClassName)来获取到  

```js
document.getElementsByClassName('类名');//例如: warp
```

##### getElementsByTagName: 通过标签名来获取到对应元素集合

```js
let list = document.getElementsByTagName('li'); //获取到页面中所有的li标签  


//如果想看到每一项的话 可以通过循环遍历出来每一项
for(let i=0; i<list.length; i++){
        console.log(list[i]);
}
```

##### 通过CSS选择器来获取DOM元素

```js
//querySelector: 通过选择器来获取 拿到的是单个就算页面中有相同符合条件的,也只拿第一个符合条件的标签
document.querySelector('.box');


//要拿到多个相同的元素(集合) 获取多个符合条件的选择器: querySelectorAll
document.querySelectorAll('css选择器')
```



## 3.操作HTML内容

`节点.innerHTML` : 读取或设置元素文本内容,可识别标签语法
`节点.innerText` : 读取或设置元素文本内容,不能识别标签语法

html内容:

```html
<!DOCTYPE html> 
<html lang="zh-CN"> 
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="关键词信息"> 
    <meta name="description" content="描述信息"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>案例</title> 
</head>
<body>
     <div id="box">
         <span>年少不知学习好</span>
     </div>

     <div class="wrap"> </div>
</body>
</html>
```

js内容演示:

```js
// innerHTML 获取元素的内容   (从标签开始到结束之间所有的内容)
let oBox = document.getElementById("box");
//打印出来的是 标签里的内容
console.log(oBox.innerHTML);


// 那如果我想要在原本内容 插入句话  错把封夕当成宝
// oBox.innerHTML=',错把封夕当成宝'; // 这样插入呢  会发现把原本的给替换掉了

// 那就是在它原来的基础上进行添加上 
// 写法: 先获取原来的oBox里面的innerHTML  然后拼接上(+)  你后续需要的内容 (=) 赋值oBox.innerHTML
oBox.innerHTML = oBox.innerHTML + ',错把哥哥当成宝';

// 简写: x=x+2;  ===>  x+=2;
oBox.innerHTML+=',错把哥哥当成宝';


// innerHTML除了可以插入文字内容  那我能不能插入一个标签呢 
let oWrap =document.querySelector('.wrap');
// console.log(oWrap);
// innerHTML 会自己解析标签  
oWrap.innerHTML = '<a href="#">点我宝贝</a>';

// innerText 不解析标签 
oWrap.innerText = '<a href="#">点我宝贝</a>';
```



## 4.操作标签属性

标签里面自带属性 我们是可以进行设置的 ( id  class  title  src alt name等 这些都是合法正规的属性) 

直接使用 `节点.属性` 的方式: (节点.id等等 )

```HTML
<div id="box" class="box1" title="看你可以输出我不">明天先回家了</div>
```

```js
let Box = document.querySelector('#box');

// 下面 我就在div标签属性里面 获取到我取的id 和标题内容描述  
console.log(Box.id);
console.log(Box.title);

// 单独获取类名  class是关键字 你是要获取类名 className
// console.log(Box.class);  //undefined 

// 这个是打印你的类名 而上面是打印关键字
console.log(Box.className); 
```



## 5.操作样式和类名

访问元素节点的style属性，获取样式对象；样式对象中包含CSS属性，使用点语法操作。

```js
//修改文字颜色为红色
p.style.color = "red";

//修改高度为250px
p.style.width = "250px";

p.style.fontSize = "20px";
```

> 如果css属性名包含连接符，使用JS访问时，一律去掉连接符,改为驼峰法

```js
// 修改背景颜色  background-color
//p.style.background-color = 'skyblue'; 
// 这些写法会报错 因为在样式里面的中横向在js里面是表示 减 

// 解决方法: 小驼峰命名  把 - 去掉然后第二个单词首字母大写
p.style.backgroundColor = 'skyblue';
```

##### 类名的操作

使用 `.className` 可以来操作标签的类名，但是需要新加一个类名，或者去掉某个类名时，使用`.className`较为麻烦。所以推荐使用.classList 来操作类名。

```js
//添加类名
元素.classList.add('类名') 

//删除类名
元素.classList.remove('类名')

//有则删  无则加 (适用于 简单的开关)
元素.classList.toggle('类名')
```

## 6.创建、添加、删除节点

- 创建节点：createElement 创建一个元素节点；
- 添加节点：
  - appendChild 元素最后添加一个子节点；
  - insertBefore 在元素某个子节点之前添加新子节点，第一个参数为新节点，第二个参数为已存在的子节点。
- 替换节点：replaceChild 用新节点替换某个子节点，第一个参数为新节点，第二个参数为已存在的某个子节点。
- 删除节点：removeChild 删除元素的某个子节点。



## 7. 监听事件

事件是达到某个事先设定的条件，自动触发的动作。例如点击了某个按钮、在文本框中输入文本、按下键盘上的某个按键、移动鼠标等等。我们可以使用 JavaScript中的监听事件来检测事件是否发生并执行某些特定的程序。

**事件种类**

|    事件     |                 描述                 |
| :---------: | :----------------------------------: |
|   onclick   |       点击鼠标左键时触发此事件       |
| onmouseover | 当鼠标移动到某个元素上方时触发此事件 |
| onmouseout  |  当鼠标离开某个元素范围时触发此事件  |
|   onblur    |     当前元素失去焦点时触发此事件     |
|   onfocus   |    当某个元素获得焦点时触发此事件    |
|  onscroll   |   当滚动浏览器的滚动条时触发此事件   |

**代码书写步骤**

- 获取事件源：`document.getElementById(“box”);`
- 绑定事件： 事件源box.事件onclick = function(){ 事件驱动程序 };



## 8.BOM

> BOM（Browser Object Model）浏览器对象模型，提供了一些和浏览或窗口相关的操作。比如*弹窗*、*日志期、*定时器*就属于BOM的一部分。

#### 定时器

- **周期性定时器：**每隔一段时间就执行一次代码

   ```js
   // 开启定时器:
   let time = setInterval(function, interval);
   /*
   参数 :
        function : 需要执行的代码,可以传入函数名;或匿名函数
        interval : 时间间隔,默认以毫秒为单位 1s = 1000ms
   返回值 : 返回定时器的ID,用于关闭定时器
   */
   
   // 关闭定时器
   clearInterval(time);
   ```

- **一次性定时器：**等待多久之后执行一次代码
  
```js
   //setTimeout：循环一次 
   // 第一个参数: 接收的回调函数 
   // 第二个参数: 定时器的延迟时间  时间单位是以毫秒 1秒=1000毫秒
   function fn(){
   console.log('一次性的定时器');
   }
   setTimeout(fn,3000);
```

#### 重要对象

> window的大部分属性又是对象类型

- location 保存当前窗口的地址栏信息(URL) 
- navigator：获取浏览器相关的信息。
- history：保存当前窗口所访问过的URL



## 9.Math常用对象

> Math对象不是构造函数，它具有数学常数和函数的属性和方法，用于执行跟数学相关的运算（求绝对值，取整）

```js
// 表达一个圆周率
console.log(Math.PI);

//  Math.abs() 函数返回指定数值的绝对值    传的不是数字的话就是NaN 除了null
console.log(Math.abs(-10));  // 正数 10   绝对值只能是正数

// 伪随机数   取随机值 0 - 1 之间的随机数
console.log(Math.random());//每次刷新的数都不一样是随机值 

// Math.ceil() 向上取整(天花板值) 遇到小数向上取整
console.log(Math.ceil(12.1)) //13

// Math.floor() 向下取整(地板值) 遇到小数向下取整
console.log(Math.floor(11.1)); //11  取整数 

// Math.round() 四舍五入
console.log(Math.round(11.6));//12
```

## 10.Date日期对象

创建时间对象

```js
//创建日期对象 
let date = new Date();

//对象里面写时间值  2021年8月26号 12点31分24秒
console.log(new Date(2021,8,26,12,31,24));
```

获取日期方法

1. getTime() 返回一个毫秒值    (距 1970 年 1 月 1 日之间的毫秒数)
2. getFullYear() 返回年
3. getMonth() 返回月 注意:得到的月份是从0开始 要返回当前月需要加1
4. getDate() 返回日期
5. getHours() 返回小时
6. getMinutes() 返回分钟
7. getSeconds() 返回秒
8. getDay() 返回星期
9. javascript 生成img标签的3种方式（对象、方法、html）
javascript
<div id="d1"></div>
<script>
//HTML
function a(){
document.getElementById("d1").innerHTML="<img src='http://baike.baidu.com/cms/rc/240x112dierzhou.jpg'>";
}
a();
//方法
function b(){
var d1=document.getElementById("d1");
var img=document.createElement("img");
img.src="http://baike.baidu.com/cms/rc/240x112dierzhou.jpg";
d1.appendChild(img);
}
b();
//对象
function c(){
var cc=new Image();
cc.src="http://baike.baidu.com/cms/rc/240x112dierzhou.jpg";
document.getElementById("d1").appendChild(cc);
}
c();
</script>
'''
为了确保 JavaScript 在 HTML 解析完成后执行，你可以将 <script> 标签放在 <body> 元素的最后。
'''
