p5.disableFriendlyErrors = true;

/* =========================================
    DOCUMENT VARIABLES
   =========================================
*/

let canvas; 
let poster;
let pageW; 
let pageH;
let margin = 20;
// variables pour l'exportation
let scaleRatio = 1;
let exportRatio;
// let exportRatio = 3.2;
if ($(window).width() < 1440) {
  exportRatio = 3.3;
}
else {
  exportRatio = 2.3;
}

// let exportRatioW = window.innerWidth / 300;
// let exportRatioH = window.innerHeight / 200;

let a4Paper = {
  width: 2480,
  height: 1754
}

// let pdf;


let textInputField; 
let font;

let img;

let img1; let img2; let img3; let img4; let img5; let img6; let img7; let img8; let img9;

var originalText = "Écris ton poème ici…";

let selectedWord = [];

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
    permutationMode = false,
    grilleMode = false,
    squareMode = false,
    soleilMode = false,
    formeMode = false;

 

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
    img1 = loadImage('assets/shape-01.png');
    img2 = loadImage('assets/shape-02.png');
    img3 = loadImage('assets/shape-03.png');
    img4 = loadImage('assets/shape-04.png');
    img5 = loadImage('assets/shape-05.png');
    img6 = loadImage('assets/shape-06.png');
    img7 = loadImage('assets/shape-07.png');
    img8 = loadImage('assets/shape-08.png');
    img9 = loadImage('assets/shape-09.png');
    img10 = loadImage('assets/shape-10.png');
    img11 = loadImage('assets/shape-11.png');
    img12 = loadImage('assets/shape-12.png');
    img13 = loadImage('assets/shape-13.png');

  }

  function setup() {
    imageMode(CENTER);
    rectMode(CENTER); // Create canvas
    pageW = a4Paper.width / exportRatio;
    pageH = a4Paper.height / exportRatio;
    canvas = createCanvas(pageW, pageH);
    canvas.parent("sketch"); 
    poster = createGraphics(pageW, pageH);

    // Adjust according to screens pixel density.
    // exportRatio /= pixelDensity();

    // pour l'export pdf avec p5.pdf.js -- https://github.com/zenozeng/p5.js-pdf
    // pdf = createPDF();
    // pdf.beginRecord();

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

    // active button on click 
    $('.gui-btn').on('click', function(){
      $('.gui-btn').removeClass('in-action');
      $(this).addClass('in-action');
    });

    $('.gui-textbtn').on('click', function(){
      if($(this).hasClass('in-action')){
        $(this).removeClass('in-action');
      }
      else{
        $(this).addClass('in-action');
      }
    });

    selectWord();

  }

  function draw() {
    
    poster.clear();
    poster.push();
    poster.scale(scaleRatio);
    

    poster.background(State.background);
    
    if(!constellationMode && !permutationMode && !grilleMode && !squareMode && !soleilMode && !formeMode){ 
      displayText();
    }
    else if(constellationMode){constellation();}
    else if(permutationMode){permutation();}
    else if(grilleMode){grille();}
    else if(squareMode){squareRepetition();}
    else if(soleilMode){soleil();}
    else if(formeMode){forme();}

    if(moveMode){
      mouseDragText();
      textInputField.hide();
      $('.context-menu').addClass('active');
      $('#sketch').removeClass('edit');
      $('body').removeClass('edit');
    }

     if(writingMode){
      displayTextarea();
      $('.context-menu').removeClass('active');
      $('#sketch').addClass('edit');
      $('body').addClass('edit');
    }

    if(repetitionMode){repetition();}
    if(espacementMode){espacement();}
    if(abstractionMode){abstraction();}

    poster.pop();
    
    push();
    translate(width/2, height/2);
    image(poster, 0, 0);
    pop();
  }

  function writingText() {
    originalText = this.value();
    State.text = originalText;
    console.log('you are typing: ', this.value());
  }



  function displayText(){
    // $('.gui-group.change-size').css('display', 'block');
    // poster.textAlign(LEFT, TOP);
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
    poster.translate(State.textX + margin, State.textY + (margin*2));
    poster.text(State.text, 0, 0, width - (margin*10));
    poster.pop();
  }

  function displayTextarea(){
    textInputField.show();
    // textInputField.position(212, 99);
    // console.log(repetitionMode, abstractionMode, espacementMode);
    
    if($('.repetitiontwo-mode').hasClass('in-action') || $('.espacement-mode').hasClass('in-action') || $('.abstraction-mode').hasClass('in-action')){
      $('#text-input').val(State.text);
    }
    else{
      $('#text-input').val(originalText);
    }
    $('#text-input').css({
      'font-family': 'automatico', 
      'line-height' : 1, 
    });
  }


  function exportHighResolution() {
    scaleRatio = exportRatio;

    // Re-create buffer with exportRatio and re-draw
    poster = createGraphics(exportRatio*pageW, exportRatio*pageH);
    draw();

    // Get timestamp to name the ouput file
    let timestamp = new Date().getTime();

    // Save as JPG
    save(poster, str(timestamp) + "-poeme_graphique", 'jpg');

    // Save as PDF
    // pdf.save();

    // Reset scaleRation back to 1, re-create buffer, re-draw
    scaleRatio = 1;
    poster = createGraphics(pageW, pageH);
    draw();
  }








