// Creation, ajout et suppresion d'element HTML

var ruby = document.createElement("li");
ruby.id = "rubyl";
ruby.textContent = "Ruby";
document.getElementById("contenu").replaceChild(ruby, document.getElementById("html"));
// <!-- 
//         document.getElementById("contenu").insertBefore(ruby, 

//         document.getElementById("html")); -->

document.querySelector("h3").textContent += "de programation ";

var python = document.createElement("li");
python.id = "pythonL";
python.textContent = "Python";
document.getElementById("contenu").appendChild(python);

document.getElementById("contenu").innerHTML += '<li id="php"> Php </li>';
document.getElementById("contenu").innerHTML += '<li id="ruby"> Ruby </li>';

docuemnt.getElementById("contenu").innerHTML = '';

var films = ["Le loup de Wall Street", "Vice-Versa", "BabySiting"];

var Film = {

    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },

    decrire: function () {
        var description = this.titre + "(" + this.annee + " )";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2008);

var film3 = Object.create(Film);
film3.init("BabySiting", 2013);


var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});