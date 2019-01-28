const readlineSync = require("readline-sync");

let nBre = readlineSync.question("Quel est vote nombre favori ? ");
let secret = 42;

while (nBre != secret) {
	console.log("Are you sure ? ");
	nBre = readlineSync.question("Quel est votre nombre favori ? ");
	}
console.log("42 est le nombre secret.");