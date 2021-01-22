// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.initX = 0;
  this.initY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.pression = false;

  // Developper les 3 fonctions gérant les événements
  this.fonctionPression = function (evt) {
      var pos = getMousePosition(canvas, evt);
      this.initX = pos.x;
      this.initY = pos.y;
      this.pression = true;
      interactor.onInteractionStart(this);
      console.log("Pression sur la souris : ( "+this.initX +" , "+this.initY+" )")
  }.bind(this);

  this.fonctionDeplacement = function (evt) {
      if (this.pression){
          var pos = getMousePosition(canvas, evt);
          this.finalX = pos.x;
          this.finalY = pos.y;
          interactor.onInteractionUpdate(this);
          console.log("Deplacement de la souris");
      }
  }.bind(this);

  this.fonctionRelachement = function (evt) {
      if (this.pression){
          var pos = getMousePosition(canvas, evt);
          this.finalX = pos.x;
          this.finalY = pos.y;
          this.pression = false;
          this.moving = false;
          interactor.onInteractionEnd(this);
          console.log("Relachement de la souris : ( "+this.finalX +" , "+this.finalY+" )") ;
      }
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.fonctionPression, false);
  canvas.addEventListener('mousemove', this.fonctionDeplacement, false);
  canvas.addEventListener('mouseup', this.fonctionRelachement, false);
}
// Place le point de l'événement event relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
      x: Math.round(evt.clientX - rect.left),
      y: Math.round(evt.clientY - rect.top)
  };
}