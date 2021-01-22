var editingMode = {rect: 0, line: 1, cercle: 2};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.cercle;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function (dnd) {
        this.currLineWidth = document.getElementById("spinnerWidth").value;
        this.currColour = document.getElementById("colour").value;
    };

    this.onInteractionUpdate = function (dnd) {
		console.log(this.currEditingMode) 
        switch (this.currEditingMode) {
            case editingMode.rect: {
				console.log("Vous tracez un rectangle") ;
                this.currentShape = new Rectangle(dnd.initX, dnd.initY, dnd.finalX - dnd.initX, dnd.finalY - dnd.initY, this.currLineWidth, this.currColour, this.currentStyle);
                drawing.paint(ctx, canvas);
                this.currentShape.paint(ctx, canvas);
                break;
            }
            case editingMode.line: {
				console.log("Vous tracez une ligne ") ;
                this.currentShape = new Line(dnd.initX, dnd.initY, dnd.finalX, dnd.finalY, this.currLineWidth, this.currColour, this.currentStyle);
                drawing.paint(ctx, canvas);
                this.currentShape.paint(ctx, canvas);
                break;
			}
			case editingMode.cercle: {
				console.log("Vous tracez un cercle") ;
                var rayon = Math.abs((dnd.finalX - dnd.initX) / 2);
                if (rayon < Math.abs(((dnd.finalY - dnd.initY) / 2))) {
                    rayon = Math.abs((dnd.finalY - dnd.initY) / 2);
                }
                this.currentShape = new Cercle(dnd.initX + (dnd.finalX - dnd.initX) / 2, dnd.initY + (dnd.finalY - dnd.initY) / 2, rayon, this.currLineWidth, this.currColour );
                drawing.paint(ctx, canvas);
                this.currentShape.paint(ctx, canvas);
                break;
            }
        }
    };

    this.onInteractionEnd = function (dnd) {
        console.log("Dessin termineé");
        drawing.addFormes(this.currentShape);
        drawing.paint(ctx, canvas);
    };
}