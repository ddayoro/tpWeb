
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.


function DnD(canvas, interactor) {

  // Définir ici les attributs de la 'classe'
  this.xInit = 0 ;
  this.yInit = 0 ;
  this.xFinal = 0 ;
  this.yFinal = 0 ;

  this.pression = false ;

	// Developper les 3 fonctions gérant les événements
  fonctionPression = function (evt) {
    if(! (this.pression)) {
      position = getMousePosition(canvas, evt) ;
      this.xInit = position.x ;
      this.yInit = position.y ;
      this.pression = true ;
      console.log("Pression : ( "+this.xInit +" , "+this.yInit+" )")
    }
  }.bind(this) ;
  
  fonctionDeplacement = function (evt) {
    if (this.pression){
      position = getMousePosition(canvas, evt) ;
      this.xFinal = position.x ;
      this.xFinal = position.y ;
      console.log("Deplacement : ( "+this.xFinal +" , "+this.yFinal+" )")
    }

  }.bind(this) ;

  fonctionRelachement = function (evt) {
    if (this.pression) {
      position = getMousePosition(canvas, evt) ;
      this.xFinal = position.x ;
      this.yFinal = position.y ;
      this.pression = false ;
      console.log("Relachement : ( "+this.xFinal +" , "+this.yFinal+" )")
    }
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener("mousedown", fonctionPression) ;
  canvas.addEventListener("mousemove", fonctionDeplacement) ;
  canvas.addEventListener("mouseup", fonctionRelachement) ;
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



