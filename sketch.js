p5.disableFriendlyErrors = true;

/* =========================================
    DOCUMENT VARIABLES
   =========================================
*/
let canvas; 
let poster;
let pageW; 
let pageH;
let margin = 10;
// variables pour l'exportation
let scaleRatio = 1;
let exportRatio = 3;
let a4Paper = {
  width: 2480,
  height: 1754
}


let textInputField; 
let font;
let img;

var originalText = "Écris ton poème ici…";
var resetText = originalText;



/* =========================================
    MODES
   =========================================
*/
var writingMode = true, 
    moveMode = false,
    repetitionMode = false,
    espacementMode = false, 
    constellationMode = false,
    abstractionMode = false, 
    permutationMode = false;

 

/* =========================================
    STATE
    This object stores the values that are 
    manipulated through the GUI
   =========================================
   */

var State = {
    text: originalText,
    fontSize: 40,
    lineHeight: 40,
    textX: margin,
    textY: margin, 
    textFont: "",
    textWrap: "WORD", 
    background: "#FFF",
    textColor: "#000", 
    textUppercase : false,
    textLowercase : false
}

  function preload() {
    font = loadFont("fonts/automatico.otf");
    monoFont = loadFont("fonts/automatico_mono.otf");
    img = loadImage('assets/shape-01.png');
  }

  function setup() {
    imageMode(CENTER);
    rectMode(CENTER); // Create canvas
    pageW = a4Paper.width / exportRatio;
    pageH = a4Paper.height / exportRatio;
    canvas = createCanvas(pageW, pageH);
    canvas.parent("sketch"); 
    poster = createGraphics(pageW, pageH);

    State.textFont = font;
    // textFont(State.textFont);
    // textAlign(LEFT);
    // textLeading(State.lineHeight);
    // textSize(State.fontSize);

    // fill(State.textColor);
    // background(State.background);

    textInputField = createElement("textarea", State.text);
    textInputField.input(writingText);
    textInputField.id('text-input');
    textInputField.parent("sketch");

    // ------- SHORTCUTS ------- 
    $(document).keydown(function(e) {
      // console.log(e.which);
      // ALT + R
      if (e.altKey && e.which === 82){
        activateRepetition();
        e.preventDefault();
      }
      // ALT + E
      if (e.altKey && e.which === 69){
        activateEspacement();
        e.preventDefault();
      }
      // ALT + C
      if (e.altKey && e.which === 67){
        activateConstellation();
        e.preventDefault();
      }
      // ALT + A
      if (e.altKey && e.which === 65){
        activateAbstraction();
        e.preventDefault();
      }
      // ALT + P
      if (e.altKey && e.which === 80){
        activatePermutation();
        e.preventDefault();
      }
      // ALT + G
      if (e.altKey && e.which === 71){
        activateGrille();
        e.preventDefault();
      }
      // ALT + K
      if (e.altKey && e.which === 75){
        activateSquareRepetition();
        e.preventDefault();
      }
      // ALT + S
      if (e.altKey && e.which === 83){
        activateSoleil();
        e.preventDefault();
      }
      // ALT + V
      if (e.altKey && e.which === 86){
        toogleEditView();
        e.preventDefault();
      }
      
    });


  }

  function draw() {
    poster.background(State.background);
    
    if(!constellationMode && !permutationMode){
      displayText();
    }
    else if(constellationMode){
      constellation();
    }
    else if(permutationMode){
      permutation();
    }
    // else if(abstractionMode){
    //   abstraction();
    // }


    if(moveMode){
      mouseDragText();
      textInputField.hide();
      $('.context-menu').addClass('active');
      $('#sketch').removeClass('edit')
    }

     if(writingMode){
      displayTextarea();
      $('.context-menu').removeClass('active');
      $('#sketch').addClass('edit');
    }

    if(repetitionMode){repetition();}
    if(espacementMode){espacement();}
    if(abstractionMode){abstraction();}
    
    push();
    translate(width/2, height/2);
    image(poster, 0, 0);
    pop();

    

    // if(!grilleMode && !squareMode && !constellationMode && !formeMode && !soleilMode){
      // displayText();
    //  }
    // else if(grilleMode){
    //   grille();
    // }

    // else if(squareMode){
    //   squareRepetition();
    // }

    // else if(constellationMode){
    //   constellation();
    // }

    // else if(formeMode){
    //   forme();
    // }
    // else if(soleilMode){
    //   soleil();
    // }
    

    // if(writingMode){
    //   displayTextarea();
    //   $('.context-menu').removeClass('active');
    //   $('#sketch').addClass('edit');
    // }
    // else{
    //   textInputField.hide();
    //   $('.context-menu').addClass('active');
    //   $('#sketch').removeClass('edit')
    // }

    

    // if(abstractionMode){
    //   abstraction();
    // }


    // if(permutationMode){
    //   permutation();
    // }
    
  }

  

  function writingText() {
    originalText = this.value();
    State.text = originalText;
    console.log('you are typing: ', this.value());
  }



  function displayText(){
    poster.textAlign(LEFT, TOP);
    poster.rectMode(CORNER);
    poster.textWrap(State.textWrap);
    poster.textFont(State.textFont);
    poster.textSize(State.fontSize);
    poster.textLeading(State.lineHeight);
    poster.fill(State.textColor);
    if(State.textUppercase == true){
      State.text = State.text.toUpperCase();
    }
    if(State.textLowercase == true){
      State.text = State.text.toLowerCase();
    }
    // else{
    //   // State.text = State.text.charAt(0).toUpperCase() + State.text.toLowerCase().slice(1);
    //   State.text = State.text.toLowerCase();
    // }
    poster.push();
    poster.translate(State.textX, State.textY);
    poster.text(State.text, 0, 0, width - (margin*10));
    poster.pop();
  }

  function displayTextarea(){
    textInputField.show();
    // textInputField.position(212, 99);
    $('#text-input').val(State.text);
    $('#text-input').css({
      'font-family': 'automatico', 
      'line-height' : 1, 
    });
  }



/*
=========================================
 Modes
=========================================
*/

  // fonction permettant de dessiner, sauvegarder un svg et de le transformer en texte 
  // forme ne fonctionne pas => demande trop de ressources 
  function activateForme(){
    formeMode = true;
    soleilMode = false
    grilleMode = false;
    writingMode = false;
    moveMode = true;
    squareMode = false;
    constellationMode = false;
    $('.move-text').addClass('active');
    if(clickCounter < 9){
      clickCounter ++;
    }
    else{
      clickCounter = 1;
    }
    
  }

  function forme(){
    var words = originalText.split("");
    var letterCounter = 0;

    textSize(State.fontSize);
      
    imageMode(CENTER);

    push();
    translate(State.textX, State.textY);
    img = loadImage("assets/shape-0" + clickCounter + ".png", function () {
      console.log("shape-0" + clickCounter + " loaded");
    
      img.loadPixels();
      
      // on passe sur tous les pixels de l'image
      for(var x = 0; x < img.width; x+=State.fontSize){
        for(var y = 0; y < img.height; y+=State.fontSize){
          var pix = img.get(x, y);
          // on remplit la forme avec la couleur du pixels + on fait varier cette couleur suivant la position de la souris
          //fill(pix);
          // on redessine le pixel
          if(pix[3] === 255){
            if(letterCounter < words.length){
              // console.log(words[letterCounter]);
              // if(direction == "bas"){
                text(words[letterCounter], x, y); 
              // }
              // else{
              //   text(words[letterCounter], y, x); 
              // }
              
              letterCounter ++;
            }
          }
        }
      }
    });
    pop();
  }

  // nouvelle fonction qui permet d'écrire un texte en répartissant les lettres en soleil
  function activateSoleil(){
    soleilMode = true;
    formeMode = false;
    grilleMode = false;
    writingMode = false;
    moveMode = true;
    squareMode = false;
    constellationMode = false;
    $('.move-text').addClass('active');
  }

  function soleil(){
    // séparer le texte en lettres
    // var textNoSpace = originalText.replaceAll(" ", "");
    // var chars = textNoSpace.split('');
 
    textSize(State.fontSize);
    textFont(State.textFont);
    fill(State.textColor);
    rectMode(CENTER);

    var counter = 0;
    var rayNb = 8;

    push();
    translate(State.textX, State.textY);
    for(let i=0; i <= rayNb; i++ ){
      let ang = i * 45;
      rotate(radians(ang));
      push()
      translate(-20, -20)
      text(originalText, 0, 0);
      pop();
    }
    // for(let i = 0; i < chars.length; i++){
    //   fill(255);
    //   ellipse(300, 300, (chars.length * 30) - (i*30));
    //   counter++;
    // }
    // for (let y = 0; y < height - 100; y += gap) {
    //   for (let x = 0; x < width - 130; x += gap) {
    //     let letter = chars[counter];
    //     text(letter, x, y);
    //     // Increment the counter
    //     counter++;
    //   }
    // }
    pop();
  }

  // nouvelle fonction qui permet d'écrire un texte en répartissant les lettres sur une grille
  function activateGrille(){
    grilleMode = true;
    writingMode = false;
    moveMode = true;
    squareMode = false;
    constellationMode = false;
    soleilMode = false;
    formeMode = false;
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
    for (let y = 0; y <= height - 100; y += gap) {
      for (let x = 0; x <= width - 130; x += gap) {
        let letter = chars[counter];
        // console.log(letter);
        // if(State.textUppercase == true){
        //   letter = chars[counter].toUpperCase();
        // }
        // else{
        //   letter = chars[counter].toLowerCase();
        // }
        text(letter, x, y);
        // Increment the counter
        counter++;
      }
    }
    pop();
  }

  

  // nouvelle fonction permet de réaliser un carré de 9 carrés avec les lettres du mot
  function activateSquareRepetition(){
    squareMode = true;
    writingMode = false;
    moveMode = true;
    grilleMode = false;
    constellationMode = false;
    soleilMode = false;
    formeMode = false;
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
    // var col;
    // var line;
    // if(chars.length % 3 == 0){
    //   col = 3;
    //   line = 3;  
    // }
    // else if(chars.length % 2 == 0){
    //   col = 2;
    //   line = 2;
    // }
    // else{
    //   col = 3;
    //   line = 2;
    // }


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
            let letter; 
            if(State.textUppercase == true){
              letter = chars[count].toUpperCase();
            }
            else{
              letter = chars[count].toLowerCase();
            }
            text(letter, ix + squarePosX, iy +  squarePosY);
          }
        }
        count ++;
      }
    }
    pop();      
  }



  function errorMessage(){
    background(255);
    textSize(30);
    textFont('Courier');
    textAlign(CENTER);
    text("Choisir un mot", width/2, height/2);
  }
