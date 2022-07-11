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
    var squareSize = 180;
    var nbOfRepet = 10;

    poster.textSize(17);
    poster.textFont(State.textFont);
    poster.fill(State.textColor);
    
    poster.push();
    poster.translate(State.textX, State.textY);
    for (let y = 0; y < (chars.length / 3); y++) {
      for (let x = 0; x < (chars.length / 3); x++) {
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