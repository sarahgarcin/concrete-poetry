let textInput; 
let textInputField; 
var font;
var img;
var canvas;
var margin = 80;
var originalText = "Écrire un texte ici";

var mouseOffsetX = 0,
    mouseOffsetY = 0,
    dragging = false,
    rollover = false,
    moveMode = false;

var repetitionMode = false,
    abstractionMode = false;

/* =========================================
    STATE
    This object stores the values that are 
    manipulated through the GUI
   =========================================
   */

var State = {
    text: originalText,
    fontSize: 50,
    lineHeight: 50,
    textX: margin,
    textY: margin, 
    textFont: "",
    textWrap: "WORD", 
    background: 255,
    textColor: 0
}

  function preload() {
    font = loadFont("fonts/automatico.otf");
    monoFont = loadFont("fonts/automatico_mono.otf");
    img = loadImage('assets/shape-01.png');
  }

  function setup() {
    imageMode(CENTER);
    rectMode(CENTER); // Create canvas

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch"); // The poster is a PGraphics-element

    State.textFont = font;
    textFont(State.textFont);
    textAlign(LEFT);
    textLeading(State.lineHeight);
    textSize(State.fontSize);

    fill(State.textColor);
    background(State.background);
    //poster = createGraphics(586, 810);
    // manipulateImage();
    // busy = false; // gui.js


    // Write text - display input text field
    // textInputField = createInput(State.text);
    textInputField = createElement("textarea", State.text);
    textInputField.position(margin, margin);
    textInputField.size(windowWidth - (margin*2));
    textInputField.input(writingText);
    textInputField.id('text-input');

    // $('#text-input').draggable();

    // buildUI();

    $('#export-btn').on('click', function(){
      saveCanvas(canvas, 'Concrete Poetry', 'jpg');
    }); 

    $('#delete-poem').on('click', function(){
      effacer();
    }); 

    $('.mode-btn').on('click', function(){
      var mode = $(this).attr('data-mode');
      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('#'+mode).remove('active');
      }
      else{
        $('.mode-btn').removeClass('active');
        $('.mode').removeClass('active');
        $(this).addClass('active');
        $('#'+mode).addClass('active');
      }
    })

    $('#general-mode .ok-btn').on('click', function(){
      $('.mode-selection').addClass('active');
    });

    // $('.gui-group').on('click', function(){
    //   if(!$(this).hasClass('active')){
    //     $('.gui-group').removeClass('active');
    //     $(this).addClass('active');
    //   }
    // });

  }

  function draw() {
    background(State.background);
    displayText();

    if(moveMode){
      mouseDragText();
    }
    if(repetitionMode){
      repetition();
    }
    if(abstractionMode){
      abstraction();
    }

    
  }

  // responsive canvas onresize 
  function windowResized() {
    canvas = resizeCanvas(windowWidth, windowHeight);
    background(State.background);
  }

  function writingText() {
    originalText = this.value();
    console.log('you are typing: ', this.value());
  }

  function moveText(){
    console.log("Move Text");
    textInputField.hide();
    moveMode = true;
  }

  function editText(){
    console.log("Edit Text");
    moveMode = false;
    textInputField.position(State.textX, State.textY);
    textInputField.show();
  }

  function displayText(){
    textAlign(LEFT, TOP);
    rectMode(CORNER);
    textWrap(State.textWrap);
    textFont(State.textFont);
    textSize(State.fontSize);
    textLeading(State.lineHeight);
    fill(State.textColor);
    push();
    translate(State.textX, State.textY);
    text(State.text, 0, 0, width - (margin*2), height - margin);
    pop(); // Text
  }

  function dayNight(){
    console.log("mode nuit");
    if($('.day-night').hasClass('night')){
      State.background = 255; 
      State.textColor = 0;
      $('.day-night').removeClass('night');
    }
    else{
      State.background = 0; 
      State.textColor = 255;
      $('.day-night').addClass('night');
    }
  }

  function changeColorRed(){
    console.log("couleur rouge");
    if($('.change-color').hasClass('red')){ 
      State.textColor = 0;
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
      State.fontSize = 50;
      State.lineHeight = 50;
      $('.change-size').removeClass('big');
    }
    else{ 
      State.fontSize = 100;
      State.lineHeight = 100;
      $('.change-size').addClass('big');
    }
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

  function general(){
    background(255);
    textInput = $('#general-text').val();
    text(textInput, width/2, height/2, width - 80, height - 80);
  }

  // nouvelle fonction qui permet d'écrire un texte en répartissant les lettres sur une grille
  function grille(){
    background(255);
    if(textInput == undefined){
      errorMessage();
    }
    else{
      // définir les paramètres
      let margin = 30;
      translate(margin * 2, margin * 3);

      // séparer le texte en lettres
      var textNoSpace = textInput.replaceAll(" ", "");
      var chars = textNoSpace.split('');
      // calculer la taille de la typo
      let fontSize = 0.52*sqrt(((width - 100) * (height - 130))/chars.length);;
      //  la taille du gap est calculé en fonction de la taille de la typo
      let gap = fontSize * 2;
      textSize(fontSize);
      textFont(monoFont);
      textWrap(CHAR);
      textLeading(gap);

      var counter = 0;
      for (let y = 0; y < height - 100; y += gap) {
        for (let x = 0; x < width - 130; x += gap) {
          let letter = chars[counter];
          text(letter, x, y);

          // Increment the counter
          counter++;
        }
      }
    }
  }

  // nouvelle fonction permet d'écrire un texte dans une colonne étroite
  function activateAbstraction(){
    abstractionMode = true;
    textInputField.hide();
  }

  function abstraction(){
    console.log("Mode Abstraction", originalText)
    // background(255);
    // var fontSize = 40;
    // var lineHeight = fontSize * 1.2;
    // if(textInput == undefined){
    //   errorMessage();
    // }
    // else{
    //   // textWrap(CHAR);
    //   textLeading(lineHeight);
    //   textSize(fontSize);
    //   textFont(monoFont);
      State.text = originalText.replace(/.{2}/g, '$&\n');
      State.textWrap = "CHAR";
      console.log(State.text, repetitionMode);
      abstractionMode = false;

      // text(newText, 100, 100);
      // textInput = newText;
    // }
  }

  // nouvelle fonction permet d'écrire un texte avec un inter-mot aléatoire
  function espacement(){
    background(255);
    textLeading(80);
    if(textInput == undefined){
      errorMessage();
    }
    else{
      var min = 0;
      var max = 40;
      var newText = textInput.replace(/\s/g, function() {
        return " ".repeat(parseInt(Math.random() * (max - min) + min))
      });
      textSize(50);
      text(newText, width/2, height/2, width - 80, height - 80);
      // textInput = newText;
    }
  }

  // nouvelle fonction permet de réaliser un carré de 9 carrés avec les lettres du mot
  function squareRepetition(){
    background(255);
    textSize(17);
    if(textInput == undefined){
      errorMessage();
    }
    else{
      // addWordButton(mot);
      var chars = textInput.split('');
      var count = 0;
      var squarePosX = 0;
      var squarePosY = 0;
      var squareSize = 200;
      var nbOfRepet = 10;
      for (let y = 1; y < (chars.length / 3) + 1; y++) {
        for (let x = 1; x < (chars.length / 3) + 1; x++) {
          squarePosX = x * squareSize;
          squarePosY = y * squareSize;
          for(var ix= 0; ix<squareSize; ix+=squareSize/nbOfRepet){
            for(var iy= 0; iy<squareSize; iy+=squareSize/nbOfRepet){
              text(chars[count], ix + squarePosX, iy + squarePosY);
            }
          }
          count ++;
        }
      }      
    }
  }

  // nouvelle fonction permet de répéter le mot un certain nombre de fois
  function activateRepetition(){
    repetitionMode = true;
    textInputField.hide();
  }

  function repetition(){
    console.log('Répétition Mode', originalText);
    State.textFont = monoFont;
    var newArr = [];
    for (let i = 0; i < 10; i++) {
      newArr.push(originalText);
    }
    State.text = newArr.join("");
    State.textWrap = "CHAR";
    repetitionMode = false;

    // State.text.repeat(10);
    // State.text = Array(11).join(State.text);
    // displayText();

    // textSize(State.fontSize);
    // textFont(monoFont);
    // calcul la taille du mot 
    // var wordWidth = textWidth(State.text)

    // var blockW = State.fontSize * 20;
    // var blockH = State.fontSize * 10;

    // for(var x= 0; x<blockW; x+=wordWidth){
    //   for(var y= 0; y<blockH; y+=fontSize){
    //     text(textInput, x + 80, y + 80);
    //   }
    // }
  }

  function constellation(){
    background(255);
    translate(200, 400);
    var fontSize = 30; 
    var words = textInput.split(' ');
    textSize(fontSize);
    for(var i=0; i<words.length; i++){
      var randomX = random(-100, 100);
      var randomY = random(-100, 100);
      var wordWidth = words[i].length * (fontSize/1.6) + randomX;
      text(words[i], i * wordWidth, randomY);
    }

  }

  function constellationWord(){
    background(255);
    translate(200, 400);
    var fontSize = 70; 
    var chars = textInput.split('');
    for(var i=0; i<chars.length; i++){
      var randomX = random(0, 50);
      var randomY = random(-100, 100);
      var charsWidth = fontSize*2 + randomX;
      textSize(fontSize);
      text(chars[i], i * charsWidth, randomY);
    }

  }

  function permutation(){
    background(255);
    // translate(200, 400);
    var fontSize = 30; 
    var words = textInput.split(' ');
    var permutations = getArrayMutations(words);
    var yPos = 0;
    var xPos = 80;
    textSize(fontSize);
    for(var i = 0; i<permutations.length; i++){
      for(var ii= 0; ii<permutations[i].length; ii++){
        var sentence = permutations[i].join(' ');
        text(sentence, xPos, yPos + 80);
      }
      if(yPos > height - 150){
        yPos = 0; 
        xPos += textWidth(textPermutation) + 50; 
      }
      else{
        yPos += fontSize * 1.2;
      }
      
    }

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


  function effacer(){
    background(255);
  }

  function errorMessage(){
    background(255);
    textSize(30);
    textFont('Courier');
    textAlign(CENTER);
    text("Choisir un mot", width/2, height/2);
  }


  function buildUI() {
    //////////////
    // CREATE TEMPLATE
    //////////////

    var markup = `
    <div id="gui">

    <div class="gui-group header">

    	<h4>Générateur de poèmes</h4>
      <p>
        <a href='wall.php'>Voir les créations</a>
      </p>
    </div>
    <div class="gui-group submit-btn" id="general-mode">
      <h2>Écrire un texte</h2>
      <div class="gui-input">
        <textarea id="general-text" type="text" placeholder="écrire ici"></textarea>
      </div>
      <div class="gui-input ok-btn">
        <button onclick="general()">Ok</button>
      </div>
    </div>
    <div class="gui-group click-btn mode-selection">
      <h2>Choisir un mode</h2>
      <div class="gui-input mode-btn" data-mode="constellation-mode">
        <button onclick="constellation()">Constellation</button>
      </div>
      <div class="gui-input mode-btn" data-mode="network-mode">
        <button>Réseau</button>
      </div>
      <div class="gui-input mode-btn" data-mode="repetition-mode">
        <button onclick="squareRepetition()">Répétition</button>
      </div>
      <div class="gui-input mode-btn" data-mode="repetitiontwo-mode">
        <button onclick="repetition()">Répétition 2</button>
      </div>
      <div class="gui-input mode-btn" data-mode="abstraction-mode">
        <button onclick="abstraction()">Abstraction</button>
      </div>
      <div class="gui-input mode-btn" data-mode="espacement-mode">
        <button onclick="espacement()"">Espacement</button>
      </div>
      <div class="gui-input mode-btn" data-mode="grille-mode">
        <button onclick="grille()"">Grille</button>
      </div>
      <div class="gui-input mode-btn" data-mode="permutation-mode">
        <button onclick="permutation()"">Permutation</button>
      </div>
      <div class="gui-input mode-btn" data-mode="soleil-mode">
        <button>Soleil ?</button>
      </div>
    </div>
    
  	`;
    $("#guiWrapper").html(markup);
  }