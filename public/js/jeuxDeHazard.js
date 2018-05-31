//JEUX DE HASARD


function nb_aleatoire(min, max) {
    var nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
}

function PoM_manche(min, max) {
    var nb = nb_aleatoire(min, max);
    var cpt = 0;
    var saisie;
    var msg = 'Le nombre à deviner est compris entre ' + min + ' et ' + max + '.';

    do {
        saisie = prompt(msg);

        cpt++;

        if (saisie > nb)

            msg = "C'est moins";

        else

            msg = "C'est plus";
    }

    while (saisie != nb);

    return cpt;

}

function PoM_partie(min, max) {
    var cpt = 0;
    var best_score = 0;
    var score = new Array();
    var continuer;


    do {
        score = PoM_manche(min, max);
        if (score) {
            cpt++;

            if (score < best_score || best_score == 0)
                best_score = score;
            continuer = confirm("Bravo, tu as gagner en " + score + "coups.\nVeux-tu rejouer?");
        } else
            continer = false;
    }
    while (continuer);

    alert("Tu as joue " + cpt + " mache(s).\nTon meilleur score est de " + best_score + "coups.");
    return best_score;
}