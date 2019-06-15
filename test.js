// console.log(typeof('df'));
// console.log(typeof(()=>{}));
// console.log(typeof(9));
// console.log(typeof(true));
// console.log(typeof(new Date()));
// console.log(typeof([11,9]));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof(NaN));


// console.log(new Number(9).constructor);
// console.log('sdf'.constructor);
// console.log(true.constructor);
// console.log(function(){}.constructor);
// console.log({}.constructor);
// console.log([].constructor);
// console.log(null.constructor);
// console.log(undefined.constructor);
// console.log(NaN.constructor);

const _ = require('lodash');

var obList = [{name: 'moe', age: 40, gender: true},
          {name: 'larry', age: 50, gender: true},
          {name: 'larry', age: 50},
          {name: 'zcx', age: 30},
          {name: 'zcx', age: 30},
          {name: 'zcx', age: 30},
          {name: 'lry', age: 0},
          {name: 'ldfarry', age: 5},
          {name: 'curly', age: 60}];
var ob = obList[0];
// var li = [3,2,1,1,5,6,7,9,0,null, '', null,undefined, false, NaN];
// var ['fred', 'barney'], [30, 40], [true, false];
let li2 = [1,2,2,1,3,4,4];

var arr = [2,5,9,2,19]
var strs = 'zcxzcx'

Promise.resolve(3).then(res => console.log(res))
