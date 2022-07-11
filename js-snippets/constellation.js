let constellationProcess = false;

// array des positions des mots pour le mode constellation
var wordsX = [];
var wordsY = [];

// array des positions des lettres pour le mode constellation
var lettersX = [];
var lettersY = [];

// fonction permettant de créer des constellations de phrases ou de mot 
function activateConstellation(){
  constellationMode = true;

  writingMode = false;
  moveMode = true;
  espacementMode = false;
  repetitionMode = false;
  abstractionMode = false;
  permutationMode = false;
  grilleMode = false;
  squareMode = false;
  soleilMode = false;
  formeMode = false;

  $('.gui-group.change-size').css('display', 'none');
  $('.gui-group.change-case').css('display', 'block');

  constellationProcess = true;

  // vider les array contenant les positions des mots 
  wordsX = [];
  wordsY = [];

  // vider les array contenant les positions des lettres 
  lettersX = [];
  lettersY = [];
}


function constellation(){
  if(State.textUppercase == true){
    originalText = originalText.toUpperCase();
  }
  if(State.textLowercase == true){
    originalText = originalText.toLowerCase();
  }

  var words = originalText.split(' ');

  poster.textSize(State.fontSize);
  poster.textFont(State.textFont);
  poster.fill(State.textColor);
  
  poster.push();
  poster.translate(State.textX, State.textY);

  if(words.length > 1){
    for(var i=0; i< words.length; i++){
      if(constellationProcess){
        wordsX.push(random(-100, 100));
        wordsY.push(random(0, 300));
      }
      var wordWidth = words[i].length * (State.fontSize/1.6) + wordsX[i];
      poster.text(words[i], i * wordWidth, wordsY[i]);
    }
  }
  else{
    var chars = originalText.split('');
    for(var i=0; i < chars.length; i++){
      if(constellationProcess){
        lettersX.push(random(0, 50));
        lettersY.push(random(0, 300));
      }
      var charsWidth = State.fontSize*2 + lettersX[i];
      poster.text(chars[i], i * charsWidth, lettersY[i]);
    }
  }
  
  poster.pop();
  constellationProcess = false;
}
