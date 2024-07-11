// const motApplication = 'Bonjour'; 
// let testMots = prompt('Entrez le mot suivant : ' + motApplication);

// if (testMots === motApplication){
//     alert('Bravo, vous avez écrit le bon mot !!');
// } else {
//     prompt ("Ce n'est bon veuillez recommencer" + '<br/>'+ 'Le mot est le suivant : ' + motApplication)
// }

const listeMots = ['Cachalot', 'Pétunia', 'Serviette'];
let score = 0 ;
let motsChoisie = Math.floor(Math.random()*listeMots.length)
let motUtilisateur = listeMots[motsChoisie];
let testMots = prompt('Entres le mot : ' + motUtilisateur);

if (testMots == listeMots[motsChoisie]){
    console.log("Bravo !");
}else{
    console.log("Malheuresement, c'est faux !")
}