const readlineSync = require("readline-sync");

let chiffreUn = readlineSync.question("Donnez-moi un petit chiffre ");
let chiffreDeux = readlineSync.question("Un grand chiffre ? ");
let chiffreTrois = readlineSync.question("Un chiffre compris entre les deux précédents? ");
	
if ((chiffreUn < chiffreTrois && chiffreDeux > chiffreTrois)) {
	console.log(chiffreTrois + " !"); } 
else {
	console.log(" Veuillez m'excusez, mais il semblerait que vous ayez fait une erreur.");
}