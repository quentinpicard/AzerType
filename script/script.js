function afficherResultat (score) {
    let zoneScoreSelection = document.querySelector('.zoneScore span');
    let  div = `${score}`;
    zoneScoreSelection.innerHTML = div;
    // console.log('Votre score est de : ' + score);
}

function choisirPhrasesOuMots (){
    choixJeux = prompt("Ecrivez le mot 'Phrases' ou 'Mots', pour choisir votre type de jeu :)");
}

function lancerBoucleDeJeu (listeProposition){
    let score = 0;
    for (let i=0; i<=listeProposition.length-1; i++){
        let testMots = prompt('Entres le mot : ' + listeProposition[i]);
    
       if (testMots === listeProposition[i]) {
            score ++;       
       }
    }
    return score;
}

function lancerJeu (){
    let score = 0; 
    let choixJeux = prompt("Ecrivez le mot 'Phrases' ou 'Mots', pour choisir votre type de jeu :)");

    while (choixJeux !== 'Mots' && choixJeux !== 'Phrases'){
        choisirPhrasesOuMots ();
     }
     
     if (choixJeux === 'Mots'){
        score = lancerBoucleDeJeu (listeMots);
         
     }else{
        score =  lancerBoucleDeJeu (listePhrases);
     }
     afficherResultat (score); 
}

