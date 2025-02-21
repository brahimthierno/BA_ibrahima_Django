document.getElementById('donne').addEventListener('keyup',voirNom);

function voirNom(){
    let k = document.getElementById('ver')
    let username = k.dataset.user
    k.innerText=`Votre nom est : ${username}`
    console.log("Bienvenue")
}