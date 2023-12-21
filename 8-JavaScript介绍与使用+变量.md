# JavaScript介绍与使用

### 1. 认识js

> js全称(javascript):  是网页上面的一个脚本语言   运行执行代码逻辑从而达到我们需要的效果

### 2.JavaScript组成

- 核心语法-ECMAScript：规范了JS的基本语法

    > Es 是js的语法规范   管理者

    > js是Es的实现     操作者

- DOM => 文档对象    提供js操作  

- BOM => 浏览器模型对象  提供js操作 



### 3.JavaScript书写位置

- **内部JavaScript：**直接写在html文件里，用script标签包住。

  > 注意 ：<script></script>标签可以书写在文档的任意位置，书写多次，一旦加载到script标签就会立即执行内部的JS代码

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>
    <!-- 内部JavaScript：通过script标签包裹JavaScript代码 -->
    <script>
      alert('hello world');
    </script>
  </body>
  </html>
  ```

- **外部JavaScript**：JavaScript代码写在以.js结尾的文件里通过script标签，引入到html页面中。

  > 如果 script 标签使用 src 属性引入了某 .js 文件，那么 标签的代码会被忽略

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>
    <!-- 
      外部JavaScript：通过 script 的 src 属性引入独立的 .js 文件 
      -->
    <script src="demo.js">
      // 此处的代码会被忽略掉！！！！
    	alert(666);  
    </script>
  </body>
  </html>
  ```




### 4.使用js输出内容方法:  弹窗alter、控制台输出 console.log

> js的执行过程  不像css一样  属性生效/没生效可以在标签里看到    
>
> 需要进行调试js：使用浏览器自带的开发者工具： chrome - console(打印)

```js

// 在js里,所有的文本内容需要放在引号里("字符串")
/* 方法1：*/
alert("hello world");
// alert("我是弹框");

/* 方法2 */
 console.log('呱呱呱');
// 有一个名叫console的东西，吃了它就可以得到能力，这个能力叫log
// 全局方法： 直接在任何地方，只需要写方法名就能调用的方法  叫全局的方法

```

### 5.书写规范

- 严格区分大小写

- 半角输入法  

- 严格缩进  有助于( 换行  对齐  空格  维护性 和美观性  代码可读性)

- 语句结束 加分号 ;  (没加  大部分情况下都没问题)



### 6.声明变量

- 变量用于存储数据   (可以把变量就是当成一个容器---存放我们的东西的 )

- 需要先声明变量，才能使用
- 通过关键字来声明  

## let 

let是新版本用于声明变量的关键词 **let声明的变量为普通变量**

正确用法:

`````js
// 声明变量   let 
let str;
// 将数字2 赋值给(=) 变量str  
str = 2;
// 调用console方法  打印 str的值
console.log(str);

//声明的同时赋值 这个是我们最常用的情况
let wx ="无限哥哥";
console.log(wx);

`````

错误用法:

```js
// 此处先使用变量名
alert(a) // 此处会报错
// 后进行声明，为错误用法，因为在使用时，变量未被声明，所以会报错
let a = 1
```

#### 变量的命名规范:

1. 不能以数字开头  只能出现 $ 下划线 的符号，其他符号都是非法
2. 禁止与关键字冲突
3. 变量名严格区分大小写
4. 变量名尽量见名知意,多个单词组成采用小驼峰,例如："userName"

#### 变量声明的几种情况 

1.声明了变量 且赋值  常规写法

```js
let num=123;
```

2.声明变量 暂时不赋值 

```js
//变量初始值为undefined
 let box;
```

3.声明变量  先运行在赋值   遇到等号像看右边  右边运算完毕再赋值给左边

```js
let a = 1;
// a =1
let b = 5;
// b=5
let sum = a + b;
// 执行右边运算在赋值 sum = 1+5;   
console.log(sum); //sum=6
```

4.重复声明  会报错

```js
let str = 520;
let str = "亲爱的";
console.log(str);
```

5.一次性声明多个变量   用逗号隔开

```js
let a=1,b=3,c=4;
console.log(a,b,c);
```

6.省略let  直接赋值调用,解析器会帮我们隐式声明 变量

```js
sex="男";
console.log(sex);
// 但是，不写`let`的做法，不利于表达意图，而且容易不知不觉地创建全局变量，所以建议使用`let`命令声明变量
```

7.let 声明变量 ,  且重复赋值  后者会覆盖前者

```js
let x;
x = 10;       
x = 20;
console.log(x);
// 一开始声明并且赋值为`10` 后面如果想要修改`x`的值 不需要重新声明 直接再次赋值`20` 覆盖之前`x`的值内容即可
```

## const

`const`所声明的变量为**常量**，而非**普通变量**

```js
// const 常量 不会变量的量 比如 π等
const cpdd ="处对象";

//  重新给 cpdd 赋值
cpdd ="除啥呢?";// 报错

console.log(cpdd);
// const 声明变量  不能重复赋值 
// 使用const声明的时候  必须赋值
```

