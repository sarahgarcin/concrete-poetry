let textInput; 
let textInputField; 
var font;
var img;
var canvas;
var margin = 80;
var originalText = "Écrire un texte ici";
var randomX;
var randomY;

// array des positions des mots pour le mode constellation
var wordsX = [];
var wordsY = [];

// array des positions des lettres pour le mode constellation
var lettersX = [];
var lettersY = [];

// déclarer l'objet "mot" pour le mode constellation
let word;

var mouseOffsetX = 0,
    mouseOffsetY = 0,
    dragging = false,
    rollover = false,
    moveMode = false;

var repetitionMode = false,
    abstractionMode = false,
    espacementMode = false,
    permutationMode = false,
    grilleMode = false,
    squareMode = false,
    constellationMode = false,
    writingMode = true;

var constellationProcess = false;

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
    background: "#FFF",
    textColor: "#000", 
    textUppercase : false
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
    textInputField.position(State.textX, State.textY);
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

    $('.move-text').on('click', function(){
      $('.edit-text').removeClass('active');
      $('.move-text').addClass('active');
    });

    $('.edit-text').on('click', function(){
      $('.edit-text').addClass('active');
      $('.move-text').removeClass('active');
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
    if(!grilleMode && !squareMode && !constellationMode){
      displayText();
    }
    else if(grilleMode){
      grille();
    }

    else if(squareMode){
      squareRepetition();
    }

    else if(constellationMode){
      constellation();
    }
    

    if(writingMode){
      displayTextarea();
    }
    else{
      textInputField.hide();
    }

    if(moveMode){
      mouseDragText();
    }
    if(repetitionMode){
      repetition();
    }
    if(abstractionMode){
      abstraction();
    }
    if(espacementMode){
      espacement();
    }

    if(permutationMode){
      permutation();
    }


    
  }

  // responsive canvas onresize 
  function windowResized() {
    canvas = resizeCanvas(windowWidth, windowHeight);
    background(State.background);
  }

  function writingText() {
    originalText = this.value();
    State.text = originalText;
    console.log('you are typing: ', this.value());
  }

  function moveText(){
    console.log("Move Text");
    // textInputField.hide();
    writingMode = false;
    moveMode = true;
  }

  function editText(){
    console.log("Edit Text");
    moveMode = false;
    // textInputField.position(State.textX, State.textY);
    // textInputField.show();
    writingMode = true;
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
    text(State.text, 0, 0, width - (margin*2));
    pop(); // Text
  }

  function displayTextarea(){
    // console.log("display textarea", State.textFont, State.fontSize);
    textInputField.show();
    textInputField.position(State.textX, State.textY);
    $('#text-input').val(State.text);
    $('#text-input').css({
      'font-family': 'automatico',
      'font-size': State.fontSize + "px", 
      'line-height' : 1, 
      'color': State.textColor, 
      'background-color': State.background, 
      'border-color': State.textColor
    });
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

/*
=========================================
 Modes
=========================================
*/

  // nouvelle fonction qui permet d'écrire un texte en répartissant les lettres sur une grille
  function activateGrille(){
    grilleMode = true;
    writingMode = false;
    moveMode = true;
    squareMode = false;
    constellationMode = false;
    $('.move-text').addClass('active');
  }

  function grille(){
    // définir les paramètres
    // let margin = 30;
    // translate(margin * 2, margin * 3);

    // séparer le texte en lettres
    var textNoSpace = originalText.replaceAll(" ", "");
    var chars = textNoSpace.split('');
    // calculer la taille de la typo
    let fontSize = 0.52*sqrt(((width - 100) * (height - 130))/chars.length);
    //  la taille du gap est calculé en fonction de la taille de la typo
    let gap = fontSize * 2;
    textSize(fontSize);
    textFont(State.textFont);
    textWrap(CHAR);
    textLeading(gap);
    fill(State.textColor);

    var counter = 0;

    push();
    translate(State.textX, State.textY);
    for (let y = 0; y < height - 100; y += gap) {
      for (let x = 0; x < width - 130; x += gap) {
        let letter = chars[counter];
        text(letter, x, y);
        // Increment the counter
        counter++;
      }
    }
    pop();
  }

  // nouvelle fonction permet d'écrire un texte dans une colonne étroite
  function activateAbstraction(){
    abstractionMode = true;
    writingMode = false;
    moveMode = true;
    grilleMode = false;
    squareMode = false;
    constellationMode = false;
    $('.move-text').addClass('active');
    // textInputField.hide();
  }

  function abstraction(){
    console.log("Mode Abstraction", originalText);
      State.text = originalText.replace(/.{2}/g, '$&\n');
      State.textWrap = "CHAR";
      console.log(State.text, repetitionMode);
      abstractionMode = false;
  }

  // nouvelle fonction permet d'écrire un texte avec un inter-mot aléatoire
  function activateEspacement(){
    espacementMode = true;
    writingMode = false;
    moveMode = true;
    grilleMode = false;
    squareMode = false;
    constellationMode = false;
    $('.move-text').addClass('active');
    // textInputField.hide();
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

  // nouvelle fonction permet de réaliser un carré de 9 carrés avec les lettres du mot
  function activateSquareRepetition(){
    squareMode = true;
    writingMode = false;
    moveMode = true;
    grilleMode = false;
    constellationMode = false;
    $('.move-text').addClass('active');
    // textInputField.hide();
  }

  function squareRepetition(){
  
    var chars = originalText.split('');
    var count = 0;
    var squarePosX = 0;
    var squarePosY = 0;
    var squareSize = 200;
    var nbOfRepet = 10;
    textSize(17);
    textFont(State.textFont);
    fill(State.textColor);
    push();
    translate(State.textX, State.textY);
    for (let y = 0; y < (chars.length / 3); y++) {
      for (let x = 0; x < (chars.length / 3); x++) {
        squarePosX = x * squareSize;
        squarePosY = y * squareSize;
        for(var ix= 0; ix<squareSize; ix+=squareSize/nbOfRepet){
          for(var iy= 0; iy<squareSize; iy+=squareSize/nbOfRepet){
            text(chars[count], ix + squarePosX, iy +  squarePosY);
          }
        }
        count ++;
      }
    }
    pop();      
  }

  // nouvelle fonction permet de répéter le mot un certain nombre de fois
  function activateRepetition(){
    repetitionMode = true;
    writingMode = false;
    moveMode = true;
    grilleMode = false;
    squareMode = false;
    constellationMode = false;
    $('.move-text').addClass('active');
    // textInputField.hide();
  }

  function repetition(){
    console.log('Répétition Mode', originalText);
    // State.textFont = monoFont;
    var newArr = [];
    for (let i = 0; i < 30; i++) {
      newArr.push(originalText);
    }
    State.text = newArr.join("");
    State.textWrap = "CHAR";
    repetitionMode = false;
  }

  // nouvelle fonction permettant de créer des constellations de phrases ou de mot 
  function activateConstellation(){
    constellationMode = true;
    writingMode = false;
    moveMode = true;
    grilleMode = false;
    squareMode = false;
    $('.move-text').addClass('active');
    constellationProcess = true;
    // vider les array contenant les positions des mots 
    wordsX = [];
    wordsY = [];

    // vider les array contenant les positions des lettres 
    lettersX = [];
    lettersY = [];
    // textInputField.hide();
  }
  function constellation(){
    var words = originalText.split(' ');

    textSize(State.fontSize);
    textFont(State.textFont);
    fill(State.textColor);
    push();
    translate(State.textX, State.textY);

    if(words.length > 1){
      for(var i=0; i<words.length; i++){
        if(constellationProcess){
          wordsX.push(random(-100, 100));
          wordsY.push(random(0, 300));
        }
        var wordWidth = words[i].length * (State.fontSize/1.6) + wordsX[i];
        text(words[i], i * wordWidth, wordsY[i]);
      }
    }
    else{
      var chars = originalText.split('');
      for(var i=0; i<chars.length; i++){
        if(constellationProcess){
          lettersX.push(random(0, 50));
          lettersY.push(random(0, 300));
        }
        var charsWidth = State.fontSize*2 + lettersX[i];
        text(chars[i], i * charsWidth, lettersY[i]);
      }
    }
    
    pop();
    constellationProcess = false;
  }


  // function constellationWord(){
  //   background(255);
  //   translate(200, 400);
  //   var fontSize = 70; 
  //   var chars = textInput.split('');
  //   for(var i=0; i<chars.length; i++){
  //     var randomX = random(0, 50);
  //     var randomY = random(-100, 100);
  //     var charsWidth = fontSize*2 + randomX;
  //     textSize(fontSize);
  //     text(chars[i], i * charsWidth, randomY);
  //   }

  // }

  function activatePermutation(){
    permutationMode = true;
    writingMode = false;
    moveMode = true;
    grilleMode = false;
    squareMode = false;
    constellationMode = false;
    $('.move-text').addClass('active');
    // textInputField.hide();
  }

  function permutation(){
    console.log('Permutation Mode', originalText);
    var words = originalText.split(' ');
    var permutations = getArrayMutations(words);
    var newArr = [];
    console.log(permutations);
    // var yPos = 0;
    // var xPos = 80;
    // textSize(fontSize);
    for(var i = 0; i<permutations.length; i++){
      // for(var ii= 0; ii<permutations[i].length; ii++){
        var sentence = permutations[i].join(' ');
        newArr.push(sentence);
        // text(sentence, xPos, yPos + 80);
      // }
      // if(yPos > height - 150){
      //   yPos = 0; 
      //   xPos += textWidth(textPermutation) + 50; 
      // }
      // else{
      //   yPos += State.textSize * 1.2;
      // }
      
    }
    State.text = newArr.join("\n");
    permutationMode = false;

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
