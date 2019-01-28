const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Choisissez un nombre: "));
let res = 0;
for(let i = 0; i < n; i++)
{
let num = parseInt(readlineSync.question("Un autre nombre : "));
  res += num;
}
console.log("Le rÃ©sultat est " + res);
