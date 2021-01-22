
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.formes = new Array ();

    this.getFormes = function () {
        return this.formes;
    }.bind(this);

    this.addFormes = function(forme) {
        this.formes.push(forme);
    }.bind(this) ;
};

function Forme(epaisseur, couleur) {
    this.epaisseur = epaisseur;
    this.couleur = couleur;

    this.getEpaisseur = function () {
        return this.epaisseur;
    }.bind(this);

    this.getCouleur = function () {
        return this.couleur;
    }.bind(this);
};

function Rectangle(x, y, largeur, hauteur, epaisseur, couleur ) {
    Forme.call(this, epaisseur, couleur);
    this.initX = x;
    this.initY = y;
    this.largeur = largeur;
    this.hauteur = hauteur;

    this.getInitX = function () {
        return this.initX;
    }.bind(this);

    this.getInitY = function () {
        return this.initY;
    }.bind(this);

    this.getLargeur = function () {
        return this.largeur;
    }.bind(this);

    this.getHauteur = function () {
        return this.hauteur;
    }.bind(this);
};
Rectangle.prototype = new Forme();

function Line(x1, y1, x2, y2, epaisseur, couleur ) {
    Forme.call(this, epaisseur, couleur);
    this.initX = x1;
    this.initY = y1;
    this.finalX = x2;
    this.finalY = y2;

    this.getInitX = function () {
        return this.initX;
    }.bind(this);

    this.getInitY = function () {
        return this.initY;
    }.bind(this);

    this.getFinalX = function () {
        return this.finalX;
    }.bind(this);

    this.getFinalY = function () {
        return this.finalY;
    }.bind(this);
};
Line.prototype = new Forme();
function Cercle (x, y, r, epaisseur, couleur) {
    Forme.call(this, epaisseur, couleur) ;
    this.initX = x ;
    this.initY = y ;
    this.rayon = r ;

    this.getInitX = function () {
        return this.initX;
    }.bind(this);

    this.getInitY = function () {
        return this.initY;
    }.bind(this);

    this.getRayon = function () {
        return this.rayon;
    }.bind(this);
}
Cercle.prototype = new Forme();