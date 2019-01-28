const readlineSync = require("readline-sync");

let nbr = parseInt(readlineSync.question("Combien voulez-vous de nombres aléatoires ?"));
function rand10()
{
 return (Math.floor(Math.random()*10 +1));
}


let multiRand = (n)=>{
	let tab = [];
	for (let i = 0; i < n ; i++) {
		tab.push(rand10());
	}
	return tab;
}

console.log(multiRand(nbr))