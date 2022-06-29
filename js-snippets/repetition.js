  // fonction permettant de répéter le mot un certain nombre de fois
  function activateRepetition(){
    writingMode = false;
    moveMode = true;
    repetitionMode = true;
    $('.gui-group.change-size').css('display', 'none');
  }

  function repetition(){
    console.log('Répétition Mode', originalText);
    var newArr = [];
    var nbOfRepet = random(10, 40);
    for (let i = 0; i < nbOfRepet; i++) {
      newArr.push(originalText);
    }
    State.text = newArr.join("");
     // calculer la taille de la typo
    let chars = State.text.split('');
    console.log(chars.length);
    let fontSize = 1.15*sqrt((pageW * pageH)/chars.length);
    let lineHeight = fontSize * 1;
    State.fontSize = Math.floor(fontSize);
    State.lineHeight = lineHeight;
    console.log(Math.floor(fontSize));
    State.textWrap = "CHAR";
    repetitionMode = false;
  }

