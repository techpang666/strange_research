
/**
 * @description 作用域解读
 */

var x = 1;
function foo(
  // 3. 作者说了这里是一个单独的作用域 所以这两个是同个东西
	x, /* 1. 没有关键字声明变量 属于全局变量 */
	y = function () {
		x = 2; /* 2. 这个也是全局变量 */
	},
) {
  // 4. 这个因为使用了关键字声明 这个属于另一个作用域了 就跟匿名函数的x不是一个作用域了
	var x = 3;
	y();
	console.log(x);
}

foo(); // 3
x; // 1

/**
 * @description if的作用域及外部可以访问嘛
 */

if (true) {
	// 块级作用域 let外部拿不到 var可以
	let demo = 'demo'
	console.log(demo);
}

console.log(demo);

/**
 * @description 类型比较
 */

let demo = '1'
let age = 1
// 类型不同时 尝试转换类型进行比较
console.log(demo == age); /* true */
// 全等比较 包括类型
console.log(demo === age); /* false */
// 类型不同时 尝试转换类型进行比较
console.log(demo != age); /* false */
// 全等比较 包括类型
console.log(demo !== age); /* true */

/**
 * @description 变量提升及全局变量问题
 */

var demo = 'window' /* 全局 */
function fn() {
  console.log(demo); /* window */
  if (false) {
    // var是全局变量 不受限块级作用域
    // 因为变量提升 先是undefined 再是赋值var undefined的时候替换了原来的window
    var demo = 'var'
  }
}
fn()

/**
 * @description var定义的迭代变量
 */

var arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] = function () {
		console.log(i);
	};
}
console.log(i); /* 10 */
