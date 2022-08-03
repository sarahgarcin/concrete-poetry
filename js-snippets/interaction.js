var mouseOffsetX = 0,
    mouseOffsetY = 0,
    dragging = false,
    rollover = false;


function toogleEditView(){
  // réinitialiser le majuscule / minuscule
  State.textUppercase = false;
  State.textLowercase = false;
  $('.change-case').removeClass('upper');

  if(writingMode === true){
    moveText();   
  }
  else{
    editText();
  }
}

function moveText(){
  console.log("Move Text");
  writingMode = false;
  moveMode = true;
  $("canvas").css('cursor', 'grab');
  poster.textAlign(LEFT, TOP);
  if(constellationMode){
    displayWordMenu();
  }
}

function editText(){
  console.log("Edit Text");
  moveMode = false;
  writingMode = true;
  $("canvas").css('cursor', 'default');
}


/*
=========================================
Mouse
=========================================
*/

function mousePressed() {
  // Did I click on the rectangle?
  if (rollover) {
    dragging = true; // If so, keep track of relative location of click to corner of rectangle
  }

  mouseOffsetX = State.textX - mouseX;
  mouseOffsetY = State.textY - mouseY;
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

function mouseDragText() {
  // Is mouse over object
  if (mouseX > 0 && mouseX < 900 && mouseY > 0 && mouseY < 900) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (dragging) {
    State.textX = mouseX + mouseOffsetX;
    State.textY = mouseY + mouseOffsetY;
  }
}