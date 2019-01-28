const readlineSync = require("readline-sync");

let min = 1;
let max = 7;
let nombre = parseInt(readlineSync.question("Choisissez un nombre de un à sept : "));

if (nombre >= min && nombre <= max)
{ 
 switch (nombre) {
   case 1:
      console.log("Lundi");
      break;
   case 2:
      console.log("Mardi");
      break;
   case 3:
      console.log("Mercredi");
      break;
   case 4:
      console.log("Jeudi");
      break;
   case 5:
      console.log("Vendredi");
      break;
   case 6:
      console.log("Samedi");
      break;
   case 7:
      console.log("Dimanche");
      break;
 }
}