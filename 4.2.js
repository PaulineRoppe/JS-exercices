const readlineSync = require("readline-sync");

function rand(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numAlea = rand(1, 10);
console.log(numAlea);