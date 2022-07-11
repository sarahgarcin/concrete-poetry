  // fonction qui permet d'écrire un texte en répartissant les lettres en soleil
function activateSoleil(){
  soleilMode = true;

  writingMode = false;
  moveMode = true;

  repetitionMode = false;
  espacementMode = false;
  constellationMode = false;
  abstractionMode = false;
  permutationMode = false;
  grilleMode = false;
  squareMode = false;
  formeMode = false;

  $('.gui-group.change-size').css('display', 'none');
  $('.gui-group.change-case').css('display', 'none');
}

function soleil(){
  console.log('Soleil Mode', originalText);

  var r     = 30; //taille du rayon
  var angle = 0;
  var nbOfRepet = 8; // nombre de lettres par cercle
  var step = TWO_PI/nbOfRepet; //in radians equivalent of 360/6 in
  
  var chars = originalText.split('');
  // calculer la taille de la typo
  let fontSize = 0.08*sqrt((width * height)/chars.length);

  poster.textSize(fontSize);
  poster.textFont(State.textFont);
  poster.fill(State.textColor);
  poster.rectMode(CENTER);

  poster.push();
  poster.translate(State.textX + width/2, State.textY + height/2);

  if(chars.length < 9){
    // affiche la première lettre au milieu
    poster.text(chars[0], 0, 0);
    for(var i = 1; i<chars.length; i++){
      for(var n = 0; n<nbOfRepet; n++){
          //convert polar coordinates to cartesian coordinates
          var x = r * sin(angle);
          var y = r * cos(angle);
          poster.text(chars[i], x, y);
          //increase angle by step size
          angle = angle + step;
      }
      // increase size of circle
      r = r + 40;
    }
  }
  else{
    poster.text('Erreur, ce mode ne fonctionne qu\'avec 8 lettres maximum', 0, 0, pageW);
  }

  poster.pop();
}



