let colorCounter = 0;
let negatif = false;

function negPoem(){
  console.log("mode négatif");
  if($('.neg-poem').hasClass('negatif')){
    negatif = false;
    State.background = "#FFF";
    State.textColor = "#000"; 
    $('.neg-poem').removeClass('negatif');
  }
  else{
    negatif = true;
    State.background = "#000";
    State.textColor = "#FFF"; 
    $('.neg-poem').addClass('negatif');
  }
}

function colorPoem(){
  console.log("mode couleur", negatif);
  if(colorCounter < 10){
    colorCounter ++;
  }
  else{
    colorCounter = 1;
  }

  switch (colorCounter) {
    case 1:
      if(negatif == true){
        State.background = "#66CCFF"; 
      }
      else{
        State.background = "#FFF"; 
      }
      State.textColor = "#FF0000";
    break;
    case 2:
      if(negatif == true){
        State.background = "#FF0000";
      } 
      else{
        State.background = "#FFF"; 
      }
      State.textColor = "#FFFF00";
    break;
    case 3:
      if(negatif == true){
        State.background = "#7F007F"; 
      }
      else{
        State.background = "#FFF"; 
      }
      State.textColor = "#FFFF00";
    break;
    case 4:
      if(negatif == true){
        State.background = "#0000FF"; 
      }
      else{
        State.background = "#FFF"; 
      }
      State.textColor = "#FF7F00";
    break;
    case 5:
      if(negatif == true){
        State.background = "#FFFF00";
      }
      else{
        State.background = "#FFF"; 
      } 
      State.textColor = "#FF00FF";
    break;
    case 6:
      if(negatif == true){
        State.background = "#FF00FF"; 
      }
      else{
        State.background = "#FFF"; 
      }
      State.textColor = "#00FF80";
    break;
    case 7:
      if(negatif == true){
        State.background = "#FF0000"; 
      }
      else{
        State.background = "#FFF"; 
      }
      State.textColor = "#008000";
    break;
    case 8:
      if(negatif == true){
        State.background = "#FF0000";
      } 
      else{
        State.background = "#FFF"; 
      }
      State.textColor = "#66CCFF";
    break;
    case 9:
      if(negatif == true){
        State.background = "#80FF00";
      } 
      else{
        State.background = "#FFF"; 
      }
      State.textColor = "#400080";
    break;
    default:
      if(negatif == true){
        State.background = "#000";
        State.textColor = "#FFF";
      } 
      else{
        State.background = "#FFF";
        State.textColor = "#000"; 
      }
  }




  // if($('.color-poem').hasClass('active')){
  //   State.background = "#FFF"; 
  //   State.textColor = "#000";
  //   $('.color-poem').removeClass('active');
  // }
  // else{
  //   State.background = "#000"; 
  //   State.textColor = "#FFF";
  //   $('.color-poem').addClass('active');
  // }
}

function dayNight(){
  console.log("mode nuit");
  if($('.day-night').hasClass('night')){
    State.background = "#FFF"; 
    State.textColor = "#000";
    $('.day-night').removeClass('night');
  }
  else{
    State.background = "#000"; 
    State.textColor = "#FFF";
    $('.day-night').addClass('night');
  }
}

// N'est plus utilisé…
function changeColorRed(){
  console.log("couleur rouge");
  if($('.change-color').hasClass('red')){ 
    State.textColor = "#000";
    $('.change-color').removeClass('red');
  }
  else{ 
    State.textColor = "#FF0000";
    $('.change-color').addClass('red');
  }
}

function changeFont(){
  console.log("changer la typo");
  if($('.change-font').hasClass('mono')){ 
    State.textFont = font;
    $('.change-font').removeClass('mono');
  }
  else{ 
    State.textFont = monoFont;
    $('.change-font').addClass('mono');
  }
}

function changeSize(){
  console.log("changer la taille du texte");
  if($('.change-size').hasClass('big')){ 
    State.fontSize = 40;
    State.lineHeight = 40;
    $('.change-size').removeClass('big');
  }
  else{ 
    State.fontSize = 80;
    State.lineHeight = 80;
    $('.change-size').addClass('big');
  }
}

function changeCase(){
  console.log("changer la casse du texte");
  permutationProcess = true; 
  if($('.change-case').hasClass('upper')){ 
    State.textUppercase = false;
    State.textLowercase = true;
    $('.change-case').removeClass('upper');
  }
  else{ 
    State.textUppercase = true;
    State.textLowercase = false;
    $('.change-case').addClass('upper');
  }

}

function removeWordMenu(){
  $('#word-selection').html("");
}

function displayWordMenu(){
  $('#word-selection').html(""); // vider #word-selection
  var words = originalText.split(" ");
  for(var i=0; i<words.length; i++){
    var contentToAdd = '<div class="gui-group gui-btn word select-word" data-id="'+i+'">'+ words[i] +'</div>'
    $('#word-selection').append(contentToAdd);
  }
}

function displayLetterMenu(){
  $('#word-selection').html(""); // vider #word-selection
  var textNoSpace = originalText.replaceAll(" ", "");
  var chars = textNoSpace.split("");
  for(var i=0; i<chars.length; i++){
    var contentToAdd = '<div class="gui-group gui-btn word select-word" data-id="'+i+'">'+ chars[i] +'</div>'
    $('#word-selection').append(contentToAdd);
  }
}


function selectWord(){
  console.log("selection d'un mot");
  $('body').on('click', '.select-word', function(){
    if($(this).hasClass('in-action')){
      console.log('remove');
      $(this).removeClass('in-action');
      // selectedWord = null;
      // selectedWord = [];
      var i = selectedWord.indexOf($(this).html()); // get index where to delete
      var deleted = selectedWord.splice(i, 1); // remove from array at that index
    }
    else{
      console.log('add');
      // $('.select-word').removeClass('in-action');
      $(this).addClass('in-action');
      // $(this).attr('data-index', selectedWord.length);
      // selectedWord = $(this).attr('data-id');  
      // selectedWord.push($(this).attr('data-id'));
      selectedWord.push($(this).html());
    }
    console.log(selectedWord);
  });
}


// function qui transforme inArray insensible à la casse
function inArrayCaseInsensitive(needle, haystackArray){
  //Iterates over an array of items to return the index of the first item that matches the provided val ('needle') in a case-insensitive way.  Returns -1 if no match found.
  var defaultResult = -1;
  var result = defaultResult;
  $.each(haystackArray, function(index, value) { 
      if (result == defaultResult && value.toLowerCase() == needle.toLowerCase()) {
          result = index;
      }
  });
  return result;
}

 



