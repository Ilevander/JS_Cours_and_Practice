
let x; // le premier nombre de la multiplication
let y; // le deuxième nombre de la multiplication

// donne le rôle du bouton :
// si 'verifier' est 'true' alors le prochain clic sur le bouton
// est destiné à vérifier la réponse de l'utilisateur, sinon,
// le clic est destiné à proposer une nouvelle multiplication
let verifier = true; 

// génére une nouvelle multiplication, autrement dit :
// - génère deux entiers au hasard dans l'intervalle [1,9]
// - les affiche dans les bons éléments HTML
function nouvelle() {
	var note1 = document.getElementById("nombre1");
    var note2 = document.getElementById("nombre2");
    note1.innerText=parseInt(Math.random()*10);
    note2.innerText=parseInt(Math.random()*10);
}

// cette fonction est appelée quand l'utilisateur clique
// sur le bouton. La fonction a deux rôles alternatifs :
// - vérifier que la proposition de l'utilisateur est correcte
// - générer une nouvelle multiplication
// Cette alternance est gérée à l'aide de la variable 'verifier'
function valider() {
	if(verifier){
		var note1 = document.getElementById("nombre1");
    	var note2 = document.getElementById("nombre2");
   		var prop = document.getElementById("proposition");
		var res = document.getElementById("resultat");
		res.style = "visibility: visible";
		if ((Math.floor(note1.innerText) * Math.floor(note2.innerText)) == Math.floor(prop.value)) {
			res.innerText =" bonne reponse ";
		}else{
			res.innerText =" mauvaise reponse ";
		}
		verifier=false;
	}else{
		nouvelle();
		var note1 = document.getElementById("nombre1");
    	var note2 = document.getElementById("nombre2");
   		var prop = document.getElementById("proposition");
		var res = document.getElementById("resultat");
		res.style = "visibility: hidden";
		verifier=true;
	}
}


