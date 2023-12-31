let obj = {
	name: '封夕',
	text: '祝大家新年快乐!'
}
for(let i=1;i<=9;i++){
	for(let j=1;j<=9;j++){
		console.log(i+"*"+j+"="+i*j);
	}
}
let num = 1;
while (num < 10) {
	for (let j = 1; j <= 9; j++) {
		console.log(num + "*" + j + "=" + num * j);
	}
	// 递增 
	num++;
}
let sum = 1;
do {
	for (let j = 1; j <= 9; j++) {
		console.log(sum + "*" + j + "=" + sum * j);
	}
	sum++;
} while (sum < 10); // 表达式为真  重复执行递加    为假只打印  do里面的语句内容 不会继续递加了
