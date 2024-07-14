function afficherResultat (score) {
    let zoneScoreSelection = document.querySelector('.zoneScore span');
    zoneScoreSelection.innerHTML = score;
    // console.log('Votre score est de : ' + score);
}

function afficherMots (proposition){
    let zonePropositionSelection = document.querySelector('.zoneProposition');
    zonePropositionSelection.innerHTML = proposition; 
}


function lancerJeu (){
    let score = 0; 
    let buttonIdSelection = document.getElementById('btnValiderMot');
    let recupInputEcriture = document.getElementById('inputEcriture')
    let i = 0; 
    afficherMots(listeMots[i]);
    buttonIdSelection.addEventListener("click", () => {
        if (recupInputEcriture.value === listeMots[i] ){
            score++;
        }

        i++;

        afficherMots(listeMots[i]);
        afficherResultat (score); 

        recupInputEcriture.value = '';
        if (listeMots[i] === undefined){
            afficherMots("Le jeu est fini");
            recupInputEcriture.disabled=  true; 
        }

        return i; 
    })
}

