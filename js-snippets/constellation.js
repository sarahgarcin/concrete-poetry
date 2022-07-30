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

  $('.gui-group.change-size').css('display', 'block');
  $('.gui-group.change-case').css('display', 'block');

  constellationProcess = true;

  // vider les array contenant les positions des mots 
  wordsX = [];
  wordsY = [];

  // vider les array contenant les positions des lettres 
  lettersX = [];
  lettersY = [];


  // faire apparaître le menu contextuel pour les mots
  $('#word-selection').html(""); // vider #word-selection
  var words = originalText.split(" ");
  for(var i=0; i<words.length; i++){
    var contentToAdd = '<div class="gui-group gui-btn word select-word" data-id="'+i+'">'+ words[i] +'</div>'
    $('#word-selection').append(contentToAdd);
  }
  selectWord();
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
      // var wordWidth = words[i].length * (State.fontSize/1.6) + wordsX[i];
      if(constellationProcess){
        wordsX.push(random(margin, (pageW - textWidth(words[i]) - margin)));
        wordsY.push(random(margin, (pageH - State.fontSize) - margin));
      }
      // poster.text(words[i], i * wordWidth, wordsY[i]);
      if(i == selectedWord){
        poster.fill(255, 0, 0);
        poster.textSize(State.fontSize * 2);
      }
      else{
        poster.fill(State.textColor);
        poster.textSize(State.fontSize);
      }
      poster.text(words[i],  wordsX[i], wordsY[i]);
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
