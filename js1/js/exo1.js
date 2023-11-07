
// calcule le prix TTC à partir du prix hors-taxe
// et de la TVA
// affiche une alerte avec un message d'erreur si les
// valeurs fournies ne sont pas des nombres
function prixTTC() {
    var pht = document.getElementById("pht");
    var tva = document.getElementById("tva");
    if(isNaN(parseInt(pht.value))|| isNaN(parseInt(tva.value))){
        alert("Veuilez sasire un valeur numerique ");  
    }else{
    var ttc = parseInt(pht.value)+parseInt(pht.value)*(parseInt(tva.value)/100);
    var resultat1=document.getElementById("resultat");
    var resultat2=document.getElementById("pttc");
    resultat2.innerText=ttc;
    resultat1.style="visibility: visible";
    }

}


function reinit(){
    var pht = document.getElementById("pht");
    var tva = document.getElementById("tva");
    pht.value=0;
    tva.value=0;
    var resultat1=document.getElementById("resultat");
    resultat1.style="visibility: hidden";

}

