function calcDistance(a) {
	return a*a
}

function calcul(x1, y1, x2, y2) {
	return Math.sqrt(calcDistance(y2-y1) + calcDistance(x2-x1));
}
console.log("Distance entre deux points est : " + calcul(2, 2, 12, 12));

/*
-créer une fonction qui calcule l'aire de la zone
-créer une fonction qui dit comment calculer la distance entre deux points par rapport à la taille 
 de la première fonction
-afficher le résulat en demandant de calculer la distance entre 2 points donnés.
*/

