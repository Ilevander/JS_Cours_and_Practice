
// teste si les champs du formulaire sont corrects et :
// - si ils le sont, retourne 'true'
// - sinon, affiche le message d'erreur adéquat dans
//   l'emplacement prévu à cet effet, et retourne 'false'
function checkform() {
   var x = true ;
   var id = document.getElementById("log");
   var pass1 = document.getElementById("pass1");
   var pass2 = document.getElementById("pass2");
   var m = "";
   if (/\d/.test(id.value)) {
   		m = m +"login ne devrait pas contenir des chiffres\n";
   		x= false;
   }if(id.value.length < 3){
		m = m +"login trop court ( moins que 3 caracteres )\n";
		x= false;
   }if((pass1.value.length < 4) || (pass2.value.length < 4)){
		m = m +"mot de pass trop court ( moins que 4 caracteres )\n";
		x= false;

   }if(pass1.value!=pass2.value){
      m = m +"mot de pass pas identiques\n";
      x= false;      
   }
   if(!x){
      errormsg(m);
   }
   return x;
}

// efface le contenu de l'élément où on affiche
// les messages d'erreur et cache cet élément
function resetform() {
   var err = document.getElementById("erreur");
   err.innerText="";
   err.style="visibility: hidden";

}

// écrit 'msg' dans l'élément où on affiche
// les messages d'erreur et montre cet élément
function errormsg(msg) {
   var err = document.getElementById("erreur");
   err.innerText= msg;
   err.style="visibility: visible";
}