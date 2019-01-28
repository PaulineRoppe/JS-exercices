 const readlineSync = require("readline-sync");

function askTvSerie() {
	let nomSerie = readlineSync.question("Quelle est le nom de votre série préférée ? ");
	let anneeSerie = readlineSync.question("Quelle est son année de sortie ? ");
	let nomsActeurs = readlineSync.question("Quels sont les noms des acteurs ? ");
	return nomSerie, anneeSerie, nomsActeurs;
}
console.log(
//console.log("Votre série préférée est " + nomSerie + "elle est sortie en " + anneeSerie + ". Les acteurs de cette série sont : " + nomsActeurs);
