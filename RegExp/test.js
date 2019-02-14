// var str = 's23sdf09df';
// var r = /(\d)(\d)/g;
// var res = str.match(r);
// var res2 = str.search(r);
// console.log(res);
// console.log(res2);
// console.log(r.test(str));
// console.log(r.exec(str));

// var paragraph = 'The quick brown fox jumped over the lazy dog. It barked.';
// var regex = /[A-Z]/g;
// var found = paragraph.match(regex);

// console.log(found);

const emailReg = /^\w{3,}(\.\w+)*@[A-z 0-9]+(\.[A-z]{2,5}){1,2}$/;
const emailValue = 'zcxyun@123'
console.log(emailReg.test(emailValue));
console.log(!emailValue || emailReg.test(emailValue))
