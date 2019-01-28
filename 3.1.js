const readlineSync = require("readline-sync");

var arr = [1, 2, 3, 4, 5].reduce(add, 0);
function add(a, b) {
return a + b;
}
console.log(arr);