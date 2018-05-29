var Personnage = {

    initPerso: function (nom, sante, force){
    this.nom = nom ;
    this.sante = sante;
    this.force = force;
},

attaquer: function (cible){
    if(this.sante > 0){
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui causse " + degats + " point de degats ");
            cible.sante = cible.sante - degats;
            if(cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort!");
            }

        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort... ");
        }
    }
};

    var Joueur = Object.create(Personnage);

    Joueur.initJoueur = function(nom, force , sante){
        this.initPerso(nom, force, sante);
        this.xp = 0;
    };

    Joueur.decrire = function(){
        var description = this.nom + " a " + this.sante + " de sante et " + this.force +
        " de force et " + this.xp + " d'experience";
        return description;
};

Joueur.combatre = function(adversaire){
    this.attaquer(adversaire);
    if(adversaire.sante === 0){
        console.log (this.nom + " a tué " + adversaire.nom + " et gagne " +
        adversaire.valeur + " points d'experience");
        this.xp += adversaire.value;
    }
};


var Adversaire = Object.create(Personnage);

Adversaire.initAdversaire = function (nom , sante ,force, race, valeur){
this.initPerso(nom, sante, force);
this.race = race;
this.valeur = valeur;
};


var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Lucie" ,125 , 25);


var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Natsu", 135, 55 );

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");

console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("Zoga", 80, 60, "orc", 30);

console.log("Un boss : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combatre(monstre);
joueur2.combatre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());
