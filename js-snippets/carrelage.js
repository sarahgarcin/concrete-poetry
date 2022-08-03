var carrelageCounter = 6;

// nouvelle fonction permet de réaliser un carré de 9 carrés avec les lettres du mot
function activateSquareRepetition(){
    squareMode = true;

    writingMode = false;
    moveMode = true;

    repetitionMode = false;
    espacementMode = false;
    constellationMode = false;
    abstractionMode = false;
    permutationMode = false;
    grilleMode = false;
    soleilMode = false;
    formeMode = false;

    $('.gui-group.change-size').css('display', 'none');
    $('.gui-group.change-case').css('display', 'block');

    if(carrelageCounter < 11){
      carrelageCounter ++;
    }
    else{
      carrelageCounter = 1;
    }
}

function squareRepetition(){
  console.log('Carrelage Mode', originalText);

  if(State.textUppercase == true){
      originalText = originalText.toUpperCase();
  }
  if(State.textLowercase == true){
      originalText = originalText.toLowerCase();
  }

  var chars = originalText.split('');
  var count = 0;
  var squarePosX = 0;
  var squarePosY = 0;
  // var squareSize = 180;
  var squareSize = 16 * carrelageCounter;
  var nbOfRepet = carrelageCounter;
  var col = 2;

  poster.textSize(16);
  poster.textFont(State.textFont);
  poster.fill(State.textColor);
  console.log(chars.length);
  if(chars.length%2 == 0 && chars.length != 2 && chars.length < 10){
    console.log("%2");
    col = 2;
    line = 2;
  }
  else if(chars.length == 2){
    console.log(" == 2");
    col = 1;
    line = 1;
    ;
  }
  else if(chars.length == 3){
    col = 2;
    line = 2;
  }
  else if(chars.length%3 == 0 && chars.length != 3 && chars.length < 10){
    col = 3;
    line = 3;
  }
  else if(chars.length > 9 && chars.length < 13){
    col = 3;
    line = 3;
  }
  else if(chars.length > 12 && chars.length < 31){
    col = 4;
    line = 4;
  }
  else if(chars.length > 30){
    col = 5;
    line = 5;
  }
  else{
    col = 2;
    line = 2;
  }

  console.log(col, line);
  poster.push();
  poster.translate(State.textX, State.textY);
  for (let y = 0; y < (chars.length / line); y++) {
    for (let x = 0; x < (chars.length / col); x++) {
      squarePosX = x * squareSize;
      squarePosY = y * squareSize;
      for(var ix= 0; ix<squareSize; ix+=squareSize/nbOfRepet){
        for(var iy= 0; iy<squareSize; iy+=squareSize/nbOfRepet){
          let letter = chars[count];
          poster.text(letter, ix + squarePosX, iy +  squarePosY);
        }
      }
      count ++;
    }
  }
  poster.pop();      
}