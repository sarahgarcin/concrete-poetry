// fonction permettant d'écrire un texte avec un inter-mot aléatoire
function activateEspacement(){
  espacementMode = true;

  writingMode = false;
  moveMode = true;
  repetitionMode = false;
  constellationMode = false;
  abstractionMode = false;

  $('.gui-group.change-size').css('display', 'block');
}

function espacement(){
  console.log("Mode Abstraction", originalText);
  var min = 0;
  var max = 40;
  State.textWrap = "WORD";
  State.text = originalText.replace(/\s/g, function() {
    return " ".repeat(parseInt(Math.random() * (max - min) + min))
  });
  espacementMode = false;
}