let app = new Vue({
    el: '#nav',
    data() {
        return {
            logoTit: '爱吃西瓜',
            Array: ['首页', '简介', '旅行', '日志', '留言', 'ENGUISH']
        }
    }
})

function currentTime() {
    let date = new Date();
    let time = document.querySelectorAll('.time');

    //获取年份  
    let YY = date.getFullYear();
    // 月份
    let Month = date.getMonth() + 1;
    // 日期  
    let DD = date.getDate();


    for (let i = 0; i < time.length; i++) {
        // console.log(i);
        time[i].innerHTML = `${YY}-${Month}-${DD}`
    }

    // 插入标签

}
// currentTime();

// 定时器
setInterval(currentTime, 500);
