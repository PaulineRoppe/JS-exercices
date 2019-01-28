//Créez une fonction nommée average(arr)qui prend un tableau de nombres en argument et renvoie la moyenne.
const readlineSync = require("readline-sync");

function average(arr) {
	var somme=0;
	var nombre=arr.length;

	for (var i=0; i<nombre; i++) {
		somme+=arr[i];
	}
	return somme/nombre;
}


//Créez une fonction nommée min(arr)qui prend un tableau de nombres en argument et renvoie l'élément minimum.


function valeurMin(arr)
{
    var min=arr[0];
    for (i=0;i<arr.length; i++)
    {
        if (arr[i] < min) {
        	min=arr[i];
        }
    }
    return min;
}

//Créez une fonction nommée max(arr)qui prend un tableau de nombres en argument et renvoie l'élément maximum.


function valeurMax(arr)
{
    var max=arr[0];
    for (i=0;i<arr.length; i++)
    {
        if (arr[i] > max) {
        	max=arr[i];
        }
    }
    return max;
}


//Créez un programme qui demande un nombre à l'utilisateur, 
//puis générez le même nombre de nombres aléatoires, mais affiche également leurs valeurs moyennes,
//minimales et maximales.

function question() {
	var arr = [];
	let nombre = readlineSync.question("Dites-moi un nombre : ");
		for (i=0; i<nombre; i++) {
			arr.push(parseInt(Math.random()*100));
		}
		return (arr);
}
arr = question();
console.log((arr),average(arr), valeurMin(arr), valeurMax(arr));

//ainsi que la multiRand(n)fonction créée dans l'exercice 3.

