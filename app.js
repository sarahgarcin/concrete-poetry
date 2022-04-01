var gui;

function setup() {

  var canvas = createCanvas(900, 900);
  canvas.parent("sketch"); 

  // Create the GUI
  // gui = createGui('Générateur de poèmes');

  gui = createGui();
  respirer = createButton("Respirer", 50, 50);
  
  // Only call draw when then gui is changed
  noLoop();
  
}


function draw() {
  drawGui();
  if(respirer.isPressed) {
    addWordButton("Respirer");
  }
    
}

function addWordButton(word){
  textSize(32);
  text(word, windowWidth/2, windowHeight/2);
}


// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}