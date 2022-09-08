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
  $('.gui-group.change-case').css('display', 'block');

  // faire disparaître le menu contextuel pour les mots
  // removeWordMenu();
}

function permutation(){
  console.log('Permutation Mode', originalText);
  let ratioCol =  1.7;
  let ratioFontSize = 0.22;

  // font = variable qui enregitre la typo romane 
  if(State.textUppercase == true){
    console.log('upper');
    originalText = originalText.toUpperCase();
    if(State.textFont === font){
      ratioCol =  1.5;
      ratioFontSize = 0.22;
    }
    else{
      ratioCol =  1.5;
      ratioFontSize = 0.22;
    }
  }
  else if(State.textLowercase == true){
    console.log('lower');
    originalText = originalText.toLowerCase();
    if(State.textFont === font){
      ratioCol =  1.7;
      ratioFontSize = 0.22;
    }
    else{
      ratioCol =  1.5;
      ratioFontSize = 0.22;
    }
  }
  else{
    if(State.textFont === font){
      ratioCol =  1.7;
      ratioFontSize = 0.22;
    }
    else{
      ratioCol =  1.5;
      ratioFontSize = 0.22;
    }

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
    var yPos = margin;
    var xPos = margin;
    let fontSize = ratioFontSize*sqrt((pageW * (pageH-90))/permutations.length);

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
        let textW = chars.length * (fontSize/ratioCol);
        yPos = margin; 
        xPos += textW; 
      }
      // if(i%(permutations.length / 2) == 0 && i!=0){
      //   // Calcul de la largeur des colonnes
      //   let textW = chars.length * (fontSize/ratioCol);
      //   yPos = margin; 
      //   xPos += textW; 
      // }
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