
// étant donnée la moyenne 'm'
// retourne l'appréciation correspondante
// (une chaîne de caractères)
function appreciation( m ) {
	if (m<6) {
		return "tres faible";
	}else if (m<10) {
		return "faible";
	}else if (m<13) {
		return "moyen";
	}else if (m<16) {
		return "bien";
	}else if (m<19) {
		return "tres bien";
	}else if (m>=19) {
		return "excellent";
	}
}
// calcule la moyenne à partir des trois notes
// et affiche la mmoyenne et l'appréciation correspondante
function calculer() {
	var note1 = document.getElementById("note1");
    var note2 = document.getElementById("note2");
    var note3 = document.getElementById("note3");
    var m = (parseInt(note1.value)+parseInt(note2.value)+parseInt(note3.value))/3;
    var res = document.getElementById("resultat");
    var resultat = document.getElementById("moyenne");
    var resultat2 = document.getElementById("appreciation");
    res.style="visibility: visible";
    resultat.innerText=m;
    resultat2.innerText=appreciation(m);
}
function increment(){
    var resultat = document.getElementById("moyenne");
    resultat.innerText++;	
}