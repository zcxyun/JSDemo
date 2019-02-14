import foo from "./a.js";

var b = function() {
    // Test.a();
    foo()
    console.log('this is %s', 'b');
}
b();
console.log('b end');
