function bonjour (Prenom){
    var message = ("Bonjour" + Prenom )
    return message;
}

console.log(bonjour (" tout le monde"));

var motInitial = "J'apprend le javascript et j'enuie tout le monde pour teste ce que je fais";
var motEnMinuscule = motInitial.toLocaleLowerCase();
console.log(motEnMinuscule);
// var motEnMajuscule = motInitial.toLocaleUpperCase();
// console.log(motEnMajuscule);


var prenom = "Michaël";

for (var i = 0; i < prenom.length; i++ ){
    console.log(prenom[i]);
}
    

    function attribu(){

    }

    var attribu = {
        type: "bleu",
        effet: "aucun",
        utilite: "aucune"
    };

    console.log("Mon attribu " + attribu.type + " na " + attribu.effet + " effet et "+ attribu.utilite + " utilite");

    attribu.effet = "chian";
    attribu.utilite = "aucun";

    console.log("Mon attribu " + attribu.type + " na rien de " + attribu.effet + " et a "+ attribu.utilite + " effet inutile");


    attribu.prix = 2.5;

    console.log("Il coute seulement " + attribu.prix + " euros");