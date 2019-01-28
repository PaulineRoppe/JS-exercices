const readlineSync = require("readline-sync");

var arr = [1, 2, 3, 4, 5] ;
var somme=0.0;
var nombre=arr.length;

for (var i=0; i<nombre; i++) {
	somme+=arr[i]
}
var moyenne = (somme/nombre);
console.log(moyenne);