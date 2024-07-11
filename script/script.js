function afficherResultat (score) {
    console.log('Votre score est de : ' + score);
}

function choisirPhrasesOuMots (){
    choixJeux = prompt("Ecrivez le mot 'Phrases' ou 'Mots', pour choisir votre type de jeu :)");
}

function lancerBoucleDeJeu (listeProposition){
    for (let i=0; i<=listeProposition.length-1; i++){
        let testMots = prompt('Entres le mot : ' + listeProposition[i]);
    
       if (testMots === listeProposition[i]) {
            score ++;
       }
    }
}

function lancerJeu (){
    let score = 0 ;
    let choixJeux = prompt("Ecrivez le mot 'Phrases' ou 'Mots', pour choisir votre type de jeu :)");

    while (choixJeux !== 'Mots' && choixJeux !== 'Phrases'){
        choisirPhrasesOuMots ();
     }
     
     if (choixJeux === 'Mots'){
         lancerBoucleDeJeu (listeMots);
         
     }else{
         lancerBoucleDeJeu (listePhrases);
     }
     afficherResultat (score); 
}

