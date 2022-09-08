var abstractionCounter = 1;

// fonction permettant d'écrire un texte dans une colonne étroite
  function activateAbstraction(){
    abstractionMode = true;

    writingMode = false;
    moveMode = true;
    
    espacementMode = false;
    repetitionMode = false;
    constellationMode = false;
    permutationMode = false;
    grilleMode = false;
    squareMode = false;
    soleilMode = false;
    formeMode = false;
    
    $('.gui-group.change-size').css('display', 'none');
    $('.gui-group.change-case').css('display', 'block');

    if(abstractionCounter < 7){
      abstractionCounter ++;
    }
    else{
      abstractionCounter = 2;
    }
    // faire disparaître le menu contextuel pour les mots
    // removeWordMenu();
  }

  function abstraction(){
    console.log("Mode Abstraction", originalText);
    
    // State.text = originalText.replace(/.{4}/g, '$&\n');
    const regex = new RegExp(`.{${abstractionCounter}}`, 'g');
    State.text = originalText.replace(regex, '$&\n');
    let cutText = State.text.split('\n');
    console.log(cutText, cutText.length);
    // console.log(cutText);
    // let xPos = State.textX;
    // let yPos = State.textY;
    // poster.textSize(State.fontSize);
    // for(var i = 0; i<cutText.length; i++){
    //   poster.text(cutText[i], xPos, yPos);
    //   if(yPos > height - 150){
    //     yPos = 0; 
    //     xPos += textWidth(cutText[0]) + 50; 
    //   }
    //   else{
    //     yPos += State.fontSize * 1.2;
    //   }
    // }
    // Calcul auto de la taille de la typo
    let fontSize = (pageH - 20) / cutText.length; 
    // let fontSize = 1.15*sqrt((pageW * pageH)/cutText.length);
    let lineHeight = fontSize * 1;
    State.fontSize = Math.floor(fontSize);
    State.lineHeight = lineHeight;
    poster.textAlign(LEFT, TOP);
    // textWrap doit être en mode WORD, sinon ça ne fonctionne pas
    State.textWrap = "WORD";
    abstractionMode = false;
  }

  