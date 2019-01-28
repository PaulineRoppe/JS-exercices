const readlineSync = require("readline-sync");

let decimalUn = readlineSync.question('Donnez-moi un nombre décimal ');
let decimalDeux = readlineSync.question('Et un deuxième ? ');
let nombreOk = Math.trunc(parseInt(decimalUn)) / Math.trunc(parseInt(decimalDeux));
console.log(nombreOk + "!");