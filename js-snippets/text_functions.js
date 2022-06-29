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