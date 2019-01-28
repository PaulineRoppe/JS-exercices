const readlineSync = require("readline-sync");

let userName = readlineSync.question('Quel est votre nom ?');
let userFirstName = readlineSync.question('Votre prénom ?');
let userCity = readlineSync.question('Et votre ville ?');
console.log("Hello " + userFirstName + " " + userName + " de " + userCity);