// fonction permettant d'écrire un texte avec un inter-mot aléatoire
function activateEspacement(){
  espacementMode = true;

  writingMode = false;
  moveMode = true;
  repetitionMode = false;
  constellationMode = false;
  abstractionMode = false;
  permutationMode = false;
  grilleMode = false;
  squareMode = false;
  soleilMode = false;
  formeMode = false;

  $('.gui-group.change-size').css('display', 'block');
  $('.gui-group.change-case').css('display', 'block');
}

function espacement(){
  console.log("Mode Espacement", originalText);
  var min = 0;
  var max = 40;
  poster.textAlign(CENTER, TOP);
  State.textWrap = "WORD";
  State.text = originalText.replace(/\s/g, function() {
    return " ".repeat(parseInt(Math.random() * (max - min) + min))
  });
  espacementMode = false;
}