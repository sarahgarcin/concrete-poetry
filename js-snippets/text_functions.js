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


function selectWord(){
  console.log("selection d'un mot");
  $('.select-word').on('click', function(){
    $('.select-word').removeClass('in-action');
    $(this).addClass('in-action');
    selectedWord = $(this).attr('data-id');
  });
  // if($('.change-case').hasClass('upper')){ 
  //   State.textUppercase = false;
  //   State.textLowercase = true;
  //   $('.change-case').removeClass('upper');
  // }
  // else{ 
  //   State.textUppercase = true;
  //   State.textLowercase = false;
  //   $('.change-case').addClass('upper');
  // }

}


