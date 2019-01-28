 const readlineSync = require("readline-sync");

//Créez une fonction factorial(a)qui retourne la factorielle d'un nombre.

 function factoriel(num){
        if (num <= 1) {
            return 1;
        } else {
            return num * factoriel(num-1);
        }
}

console.log(factoriel(12));

/*
Créer une fonction qui dit que SI le nombre choisi est inférieur ou égal à 1, cela doit retourner 1,
car n'a pas de factoriel.
SINON la fonction doit retourner le nombre choisi multiplier par la fonction -1
*/