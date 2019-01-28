const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question('Quelle est votre pointure ? ');
let birthDate = readlineSync.question('Quelle est votre année de naissance ? ');
let calcul = ((((parseInt(shoeSize) * 2) + 5) * 50) - parseInt(birthDate) +1766);
console.log(calcul + "! ");