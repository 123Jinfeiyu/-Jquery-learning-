// 1.js
// 把所有图片的路径存在一个数组里
// var arr = ["./img/1.png", "./img/2.png", "./img/3.png", "./img/4.png", "./img/5.png", "./img/6.png", "./img/7.png", "./img/8.png", "./img/9.png"];
//新数组用于存我们的所有路径,无上限数组
var arr = []
var n = Number.MAX_SAFE_INTEGER;
for (let i = 1; i < n; i++) {
    var imagePath = `./img/${i}.png`;
    // var imgpath = './img/${i}.png';这种写法不对，是反引号
    if (i == 24) {
        // console.log(imagePath);
        break;
    }
    arr.push(imagePath);
}
var div = document.getElementsByClassName('dd')[0];

function c() {
    // 检查是否找到 'dd' 元素
    if (div) {
        for (let path of arr) {
            var img = new Image();
            img.src = path;
            // 设置h1标题的样式
            var h1Title = document.querySelector('h1');
            if (h1Title) {
                h1Title.style.textAlign = 'center';
            } else {
                console.error("未找到 'h1' 标题元素");
            }
            //设置图像高宽方法一
            // img.width=1545;
            // img.height=100;
            // 设置margin-left
            img.style.marginLeft = '15%'; // 替换 '10px' 为你想要的具体值
            div.appendChild(img);
        }
        // 方法二，找到图片用forEach循环,直接设置它的宽高
        var imgList = document.querySelectorAll('img');
        // for (let i = 1; i < n; i++) {
        //     var img1=imgList[i];
        //     if (img1) {
        //         img1.width = 1545;
        //         img1.height = 100;
        //     } else {
        //         console.error('未找到符合条件的img元素');
        //     }
        // } 
        console.log(imgList);
        imgList.forEach((img, index) => {
            img.width = 1545;
            img.height = 100;
        });
        //map集合
        // arr.map((path) => {
        //     var img = new Image();
        //     img.src = path;
        //     div.appendChild(img);
        // });
        //for循环
        // for (let i = 0; i < arr.length; i++) {
        //     var img = new Image();
        //     img.src = arr[i];
        //     div.appendChild(img);
        // }
    } else {
        console.error("未找到 'dd' 元素");
    }
}
c();