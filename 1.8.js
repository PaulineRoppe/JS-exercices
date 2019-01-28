const readlineSync = require("readline-sync");

let prénom = readlineSync.question("Quel est votre prénom ? ");
let ville = readlineSync.question("Dans quelle ville habitez-vous ? ");
let plat = readlineSync.question("Quel est votre plat préféré ? ");
let datePlat = readlineSync.question("Quand en avez-vous manger pour la dernière fois ? ");
console.log("Vous êtes " + prénom + ", vous habitez à " + ville + " .Vous aimez manger des " + plat + " et la dernière fois que vous en avez manger est " + datePlat + ".");