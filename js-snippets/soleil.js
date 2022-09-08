let soleilClickCounter = 10;

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
  $('.gui-group.change-case').css('display', 'block');

  if(soleilClickCounter > 3){
    soleilClickCounter --;
  }
  else{
    soleilClickCounter = 10;
  }

  // displayLetterMenu();

}

function soleil(){
  console.log('Soleil Mode', originalText);

  if(State.textUppercase == true){
    originalText = originalText.toUpperCase();
  }
  if(State.textLowercase == true){
    originalText = originalText.toLowerCase();
  }

  // var r     = 30; //taille du rayon
  // var nbOfRepet = 8; // nombre de lettres par cercle

  // var r     = 30; //taille du rayon
  // var nbOfRepet = 8; // nombre de lettres par cercle
  var r     = soleilClickCounter * 4; //taille du rayon
  var nbOfRepet = soleilClickCounter; // nombre de lettres par cercle

  var angle = 0;
  var step = TWO_PI/nbOfRepet; //in radians equivalent of 360/6 in
  var n = 0; 
  
  var chars = originalText.split('');
  chars = chars.filter(e => String(e).trim());
  // calculer la taille de la typo
  let fontSize = 0.08*sqrt((width * height)/chars.length);

  poster.textSize(fontSize);
  poster.textFont(State.textFont);
  poster.fill(State.textColor);
  poster.rectMode(CENTER);

  if(chars.length < 9){
    poster.push();
    poster.translate(State.textX + width/2, State.textY + height/2);

    // affiche la première lettre au milieu
    // if(inArrayCaseInsensitive(chars[0], selectedWord) !== -1){
    //   poster.fill(255, 0, 0);
    // }
    // else{
    //   poster.fill(State.textColor);
    // }
    poster.text(chars[0], 0, 0);
    r = r + 20;
    for(var i = 1; i<chars.length; i++){
      for(var n = 0; n<nbOfRepet; n++){
          //convert polar coordinates to cartesian coordinates
          var x = r * sin(angle);
          var y = r * cos(angle);
          // verifie si la lettre est selectionée
          // si oui change sa couleur en rouge
          if(jQuery.inArray(chars[i], selectedWord) !== -1){
            poster.fill(255, 0, 0);
          }
          else{
            poster.fill(State.textColor);
          }
          poster.text(chars[i], x, y);
          //increase angle by step size
          angle = angle + step; 
      }
      // increase size of circle
      r = r + 40; 
    }
    poster.pop();
  }
  else{
    poster.push();
    poster.translate(State.textX + width/2, State.textY + height/2);
    poster.textSize(20);
    // affiche la première lettre au milieu
    if(jQuery.inArray(chars[0], selectedWord) !== -1){
      poster.fill(255, 0, 0);
    }
    else{
      poster.fill(State.textColor);
    }
    poster.text(chars[0], 0, 0);
    r = r + 20;
    for(var i = 1; i<chars.length; i++){
      // verifie si la lettre est selectionée
      // si oui change sa couleur en rouge
      if(jQuery.inArray(chars[i], selectedWord) !== -1){
        poster.fill(255, 0, 0);
      }
      else{
        poster.fill(State.textColor);
      }
      // for(var n = 0; n<nbOfRepet; n++){
          //convert polar coordinates to cartesian coordinates
          var x = r * sin(angle);
          var y = r * cos(angle);
          poster.text(chars[i], x, y);
          //increase angle by step size
          angle = angle + step;
          n ++;
      // }
      // increase size of circle
      if(n == nbOfRepet){
        r = r + 40;
        n = 0;
      }
      
    }
    poster.pop();

  }
  // else{
  //   poster.textSize(25);
  //   poster.push();
  //   poster.translate(State.textX + width/2, State.textY);
  //   poster.text('Erreur, ce mode ne fonctionne qu\'avec 8 lettres maximum', 0, 0, pageW);
  //   poster.pop();
  // }

  
}



