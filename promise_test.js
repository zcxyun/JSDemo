// async function multiply(input) {
//   console.log('calculating ' + input + ' x ' + input + '...');
//   return input * input;
// }

// // 0.5秒后返回input+input的计算结果:
// function add(input) {
//   console.log('calculating ' + input + ' + ' + input + '...');
//   return input + input;
// }

// var p =  (async () => {
//     console.log('start new Promise...');
//     return 123;
// })();

// p.then(123)
//  .then(add)
//  .then(multiply)
//  .then(add)
//  .then(function (result) {
//     console.log('Got value: ' + result);
// });

/**
* 调用栈 事件循环 回调队列 promise的回调函数执行
*
* await表达式的返回值及作用
* 语法：[return_value] = await expression;
* 表达式（express）：一个 Promise 对象或者任何要等待的值。
* 返回值（return_value）：返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。
*
* 我是理解： await 后面跟的数据是要放在任务队列中的，并且要在下一次事件循环中执行，
* 如果是promise，在下一次执行完之后会把resolve放在任务队列中，并且要在下一次事件循环中执行，
* resolve 执行完之后会把参数（也就是返回值）在下一次事件循环中返回
* 如果是数值，会在下一次事件循环中直接返回
*
* async表达式的返回值 async function 声明将定义一个返回 AsyncFunction 对象的异步函数。
* 当调用一个 async 函数时，会返回一个 Promise 对象。当这个 async 函数返回一个值时，
* Promise 的 resolve 方法会负责传递这个值；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。
*/
async function async1() {
  console.log('async1 start');
  // await async2();  // 返回的是promise
  // await Promise.resolve(1);  // Promise.resolve(1)返回的应该是promise
  // let a = await 1;
  await new Promise((resolve, reject) => {
    resolve(1)
  })
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeOut');
}, 0);

async1();

new Promise(function(resolve) {
  console.log('Promise 1');
  resolve();
}).then(function () {
  console.log('Promise 2');
}).then(function() {
  console.log('Promise 3');
}).then(function() {
  console.log('Promise 4');
}).then(function() {
  console.log('Promise 5');
}).then(function() {
  console.log('Promise 6');
})

console.log('script end');

