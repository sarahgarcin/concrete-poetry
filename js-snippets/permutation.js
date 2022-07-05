let permutationProcess = false;
let permutations = [];

function activatePermutation(){
  permutationMode = true;

  writingMode = false;
  moveMode = true;

  repetitionMode = false;
  espacementMode = false;
  constellationMode = false;
  abstractionMode = false;
  grilleMode = false;
  squareMode = false;
  soleilMode = false;
  formeMode = false;

  permutationProcess = true;

  // vider l'array permutations
  permutations = [];

  $('.gui-group.change-size').css('display', 'none');
  $('.gui-group.change-case').css('display', 'none');

}

function permutation(){
  console.log('Permutation Mode', originalText);

  if(State.textUppercase == true){
    console.log('upper');
    originalText = originalText.toUpperCase();
  }
  if(State.textLowercase == true){
    console.log('lower');
    originalText = originalText.toLowerCase();
  }

  // console.log(State.textUppercase, originalText);

  var words = originalText.split(' ');
  var chars = originalText.split('');

  if(words.length < 6){
    if(permutationProcess){
      // permutations = getArrayMutations(words);
      // random sur les permutations
      permutations = shuffle(getArrayMutations(words));
    }
    var yPos = 0;
    var xPos = 0;
    let fontSize;

    if(State.textFont === font){
      fontSize = 0.25*sqrt((pageW * (pageH-90))/permutations.length);
    }
    else{
      fontSize = 0.22*sqrt((pageW * (pageH-90))/permutations.length);
    }

    poster.textSize(fontSize);
    poster.textFont(State.textFont);
    poster.fill(State.textColor);

    poster.push();
    poster.translate(State.textX, State.textY);

    for(var i = 0; i<permutations.length; i++){
      var sentence = permutations[i].join(' ');
      // console.log(textWidth(sentence));
      poster.text(sentence, xPos, yPos);
      if(yPos > height - 90){
        // Calcul de la largeur des colonnes
        let textW;
        if(State.textFont === font){
          textW = chars.length * (fontSize/1.7);
        }
        else{
          textW = chars.length * (fontSize/1.5);
        }
        
        yPos = 0; 
        xPos += textW; 
      }
      else{
        yPos += fontSize * 1.2;
      }
      
    }
    poster.pop();
    permutationProcess = false;
  }
  else{
    poster.push();
    poster.translate(State.textX, State.textY);
    poster.text('Erreur, ce mode ne fonctionne qu\'avec 5 mots maximum', 0, 0, pageW);
    poster.pop();
  }

  // State.text = newArr.join("\n");
  // permutationMode = false;

  function getArrayMutations(arr, perms = [], len = arr.length) {
    if (len === 1) perms.push(arr.slice(0))

    for (let i = 0; i < len; i++) {
      getArrayMutations(arr, perms, len - 1)

      len % 2 // parity dependent adjacent elements swap
        ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
        : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
    }

    return perms
  }

}