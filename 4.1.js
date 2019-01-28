const readlineSync = require("readline-sync");

let long = readlineSync.question("Donnez moi la longueur : ");
let larg = readlineSync.question("Donnez moi la largeur : ");
function calcSurface (a, b) {
	return a*b;
}
console.log(calcSurface(long, larg));