
// le nombre d'essais dans la partie courante
let  essais = 0;
// le nombre total d'essais de toutes les parties
let  nbEssais = 0;
// le nombre de paties jouées et terminées
let  nbParties = 0;
// indique si on est en train de jouer une partie
let  partieEnCours = false;
// le nombre à deviner
let  secret = generer();
// le nombre d'essais du meilleur jeu
// Number.MAX_SAFE_INTEGER est la plus grande valeur
// entière possible
let  meilleurJeu = Number.MAX_SAFE_INTEGER;

// vérifie la proposition de l'utilisateur et :
// - si la proposition est incorrecte, affiche la bonne
//   indication (trop petit ou trop grand)
// - sinon affiche le nombre d'essais qui ont été nécessaires
//   et mets à jour les statistiques
function verifier() {
	
	let vv = document.getElementById("proposition");//id_saisi user
	let msg = document.getElementById("message"); //récupérer id de "c'est partit..."
	if(secret < vv.value){
		msg.innerHTML = "trop grand";//car c'est partit est en innerHTML
	}
	else if(secret > vv.value){
		msg.innerHTML = "trop petit";
	}
	else if(secret == vv.value){
		msg.innerHTML = "Bravo";
		nbParties++;
	}
	
}

// si 'encore' est vrai, démarre une nouvelle partie
// sinon termine le jeu en affichant le message adéquat
function jouerEncore( encore ) {

	// Get the user's guess
  var guess = document.getElementById("proposition").value;
  // Increment the number of tries
  tries++;
   // Check the guess against the secret number
  if (guess == secretNumber) {
    // If the guess is correct, display a message
    document.getElementById("question").innerHTML = "Bravo ! vous avez penser à cela en  " + tries + " essay.";
     // Update the statistics
    games++;
    totalTries += tries;
    if (tries < bestTries || bestTries == 0) {
      bestTries = tries;
    }
    afficherStat();

    // Ask the user if they want to play again
    if (confirm("Voulez vous jouer encore?")) {
      // If they do, reset the game
      generer();
    }
  } else {
    // If the guess is incorrect, display a message
    document.getElementById("question").innerHTML = "Désolé incorrect nombre , Réssayer.";
  }
}

// affiche un message dans une couleur donnée
// dans l'élément prévu à cet effet
function afficher( message, couleur ) {

}

// met à jour les statistiques
function afficherStat() {

 var stats = "Total games: " + games + "<br>"
            + "Average tries: " + (totalTries / games).toFixed(2) + "<br>"
            + "Best game: " + bestTries + " tries";
  document.getElementById("stats").innerHTML = stats;
}

// retourne un nombre aléatoire dans l'intervalle [1, 100]
function generer() {
	let value = Math.floor(Math.random() * 100+1);
  //document.getElementById("nbParties").innerHTML = value;
  return value;
}

