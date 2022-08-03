  // fonction qui permet d'écrire un texte en répartissant les lettres sur une grille
  function activateGrille(){
    grilleMode = true;

    writingMode = false;
    moveMode = true;

    repetitionMode = false;
    espacementMode = false;
    constellationMode = false;
    abstractionMode = false;
    permutationMode = false;
    squareMode = false;
    soleilMode = false;
    formeMode = false;

    $('.gui-group.change-size').css('display', 'none');
    $('.gui-group.change-case').css('display', 'block');

    displayLetterMenu();

  }

  function grille(){
    console.log('Grille Mode', originalText);
    
    if(State.textUppercase == true){
        originalText = originalText.toUpperCase();
    }
    if(State.textLowercase == true){
        originalText = originalText.toLowerCase();
    }

    // séparer le texte en lettres
    var textNoSpace = originalText.replaceAll(" ", "");
    var chars = textNoSpace.split('');
    // calculer la taille de la typo
    let fontSize = 0.52*sqrt(((width - 100) * (height - 130))/chars.length);
    //  la taille du gap est calculé en fonction de la taille de la typo
    let gap = fontSize * 2;
    
    poster.textSize(fontSize);
    poster.textFont(State.textFont);
    poster.textWrap(CHAR);
    poster.textLeading(gap);
    poster.fill(State.textColor);

    var counter = 0;

    poster.push();
    poster.translate(State.textX, State.textY);
    for (let y = 0; y <= height - 100; y += gap) {
      for (let x = 0; x <= width - 130; x += gap) {
        let letter = chars[counter];

        // verifie si la lettre est selectionée
        // si oui change sa couleur en rouge
        if(jQuery.inArray(letter, selectedWord) !== -1){
          poster.fill(255, 0, 0);
        }
        else{
          poster.fill(State.textColor);
        }
        poster.text(letter, x, y);
        // Increment the counter
        counter++;
      }
    }
    poster.pop();
  }