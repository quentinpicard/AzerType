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
    let recupInputEcriture = document.getElementById('inputEcriture');  
     
    let i = 0; 
    let listeProposition = listeMots;

    afficherMots(listeProposition[i]);


    buttonIdSelection.addEventListener("click", () => {
        if (recupInputEcriture.value === listeProposition[i] ){
            score++;
        }

        i++;
        afficherResultat (score); 

        recupInputEcriture.value = '';
        if (listeProposition[i] === undefined){
            afficherMots("Le jeu est fini");
            recupInputEcriture.disabled=  true; 
        } else {
            afficherMots(listeProposition[i])
        }

    })

    let radioBox = document.querySelectorAll('input[type=radio]');

    for (let e = 0; e < radioBox.length; e++ ){
        radioBox[e].addEventListener('change', (event) => {
            if (event.target.value === "1"){
                listeProposition = listeMots;
            }else{
                listeProposition = listePhrases;
            }
            afficherMots(listeProposition[i]);
        }) 
    }
    
}

