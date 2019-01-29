const readlineSync = require("readline-sync");

function askTvSerie(){
  const serieName = readlineSync.question("What's your favorite serie? ");
  const serieYear = readlineSync.question("What is the production year of your serie? ");
  const serieCasts = [];
  let addCasts = true;
  do {
    serieCastsNames = readlineSync.question("Say me the name of an actor of this serie: ");
    serieCasts.push(serieCastsNames);
    const userAdd = readlineSync.question("Another actor ? [y/n]");
    if (userAdd === "n") {
      addCasts = false;
    }
  }
  while (addCasts);
  const serieTv = {
    serieName,
    serieYear,
    serieCasts
  };
  return serieTv;
}

//Créer une fonction qui demander trois question à l'utilisateur
//serieCasts est un tableau car l'utilisateur peut répondre plusieurs fois à cette question
//Vu que l'utilisateur peut répondre autant de fois qu'il le souhaite, il faut une boucle.
//La boucle = si l'utilisateur répond 'y' alors reposer la question
//il faut push les résultats donnés par l'utilisateur dans le tableau prévu.
//sinon, si il répond 'n' alors arrêter la boucle
//retourner et afficher le résultat.

function randomizeCast(serieTv) {
  const serieCastsInRandomOrder = [];
  while (serieTv.serieCasts.length > 0) {
    // un chiffre au hasard, mais plus petit que le nombre de personnes dans la liste.
    const index = Math.floor(Math.random() * Math.floor(serieTv.serieCasts.length));
    // Ajout de la personne sélectionnée dans la nouvelle liste.
    serieCastsInRandomOrder.push(serieTv.serieCasts[index]);
    // Suppression de la personne sélectionnée dans la nouvelle liste.
    // Elle ne peut plus revenir au prochain tour de boucle.
    serieTv.serieCasts.splice(index, 1);
  }
  return serieCastsInRandomOrder;
}

const serieTv = askTvSerie();
const randomList = randomizeCast(serieTv);
console.log(randomList);