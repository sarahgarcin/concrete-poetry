var abstractionCounter = 1;

// fonction permettant d'écrire un texte dans une colonne étroite
  function activateAbstraction(){
    abstractionMode = true;

    writingMode = false;
    moveMode = true;
    espacementMode = false;
    repetitionMode = false;
    constellationMode = false;
    
    $('.gui-group.change-size').css('display', 'block');

    if(abstractionCounter < 6){
      abstractionCounter ++;
    }
    else{
      abstractionCounter = 2;
    }
    
  }

  function abstraction(){
    console.log("Mode Abstraction", originalText);
    
    // State.text = originalText.replace(/.{4}/g, '$&\n');
    const regex = new RegExp(`.{${abstractionCounter}}`, 'g');
    State.text = originalText.replace(regex, '$&\n');
    // textWrap doit être en mode WORD, sinon ça ne fonctionne pas
    State.textWrap = "WORD";
    abstractionMode = false;
  }