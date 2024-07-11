// const motApplication = 'Bonjour'; 
// let testMots = prompt('Entrez le mot suivant : ' + motApplication);

// if (testMots === motApplication){
//     alert('Bravo, vous avez écrit le bon mot !!');
// } else {
//     prompt ("Ce n'est bon veuillez recommencer" + '<br/>'+ 'Le mot est le suivant : ' + motApplication)
// }

const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
const listePhrases = ['Pas de panique !', 'La vie, l’univers et le reste', 'Merci pour le poisson'];
let score = 0 ;
let choixJeux = prompt("Ecrivez le mot 'Phrases' ou 'Mots', pour choisir votre type de jeu :)");


while (choixJeux !== 'Mots' && choixJeux !== 'Phrases'){
    choixJeux = prompt("Ecrivez le mot 'Phrases' ou 'Mots', pour choisir votre type de jeu :)");
}

if (choixJeux === 'Mots'){
    for (let i=0; i<=listeMots.length-1; i++){
        let testMots = prompt('Entres le mot : ' + listeMots[i]);
    
       if (testMots === listeMots[i]) {
            score ++;
       }else{
        console.log('non');
       }
       console.log(score);
    }
}else{
    for (let i=0; i<=listePhrases.length-1; i++){
        let testMots = prompt('Entres le mot : ' + listePhrases[i]);
    
       if (testMots === listePhrases[i]) {
            score ++;
       }else{
        console.log('non');
       }
       console.log(score);
    }
}
