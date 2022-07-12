let colorCounter = 0;
function colorPoem(){
  console.log("mode couleur");
  if(colorCounter < 10){
    colorCounter ++;
  }
  else{
    colorCounter = 1;
  }

  switch (colorCounter) {
    case 1:
      State.background = "#66CCFF"; 
      State.textColor = "#FF0000";
    break;
    case 2:
      State.background = "#FF0000"; 
      State.textColor = "#FFFF00";
    break;
    case 3:
      State.background = "#7F007F"; 
      State.textColor = "#FFFF00";
    break;
    case 4:
      State.background = "#0000FF"; 
      State.textColor = "#FF7F00";
    break;
    case 5:
      State.background = "#FFFF00"; 
      State.textColor = "#FF00FF";
    break;
    case 6:
      State.background = "#FF00FF"; 
      State.textColor = "#00FF80";
    break;
    case 7:
      State.background = "#FF0000"; 
      State.textColor = "#008000";
    break;
    case 8:
      State.background = "#FF0000"; 
      State.textColor = "#66CCFF";
    break;
    case 9:
      State.background = "#000"; 
      State.textColor = "#FFF";
    break;
    case 10:
      State.background = "#FFF"; 
      State.textColor = "#000";  
    break;
    default:
      State.background = "#FFF"; 
      State.textColor = "#000";
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