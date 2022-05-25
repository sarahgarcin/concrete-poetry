  var mot; 
  var font;
  var img;
  let edge;

  // direction du remplissage des formes
  var direction = "bas";


  function preload() {
    font = loadFont("fonts/automatico.otf");
    monoFont = loadFont("fonts/automatico_mono.otf");
    img = loadImage('assets/shape-01.png');
  }

  function setup() {
    imageMode(CENTER);
    rectMode(CENTER); // Create canvas

    var canvas = createCanvas(1170, 827);
    canvas.parent("sketch"); // The poster is a PGraphics-element

    edge = height/6;

    textFont(font);
    textAlign(LEFT);
    textLeading(100);
    //poster = createGraphics(586, 810);
    // manipulateImage();
    // busy = false; // gui.js

    buildUI();

    $('#export-btn').on('click', function(){
      saveCanvas(canvas, 'Concrete Poetry', 'jpg');
    }); 

    $('#delete-poem').on('click', function(){
      effacer();
    }); 

  }

  function draw() {
    // $('#font-size-slider').change(function(){
    //   var fontSizeVal = $(this).val()
    //   console.log(fontSizeVal);
    //   fillCircle(fontSizeVal)
    //   // textSize(fontSizeVal);
    // });

    // $('#circle-size-slider').change(function(){
    //   var circleSizeVal = $(this).val()
    //   console.log(circleSizeVal);
    //   createCircle(circleSizeVal)
    // });
  }

  function addWordButton(word){
    background(255);
    mot = word; 
    textSize(100);
    textFont(font);
    textAlign(LEFT);
    textWrap(CHAR);
    textLeading(100);
    text(mot, width/2, height/2, width - 80, height - 80);
  }

  function addLetter(letter, x, y){
    textSize(100);
    textFont(font);
    textAlign(LEFT);
    textWrap(CHAR);
    textLeading(100);
    text(letter, x, y);
  }

  // nouvelle fonction qui permet d'écrire un texte en répartissant les lettres sur une grille
  function grille(){
    background(255);
    var textGrille = $('#grille-text').val().toUpperCase();
    mot =  textGrille;
    if(mot == undefined){
      errorMessage();
    }
    else{
      // définir les paramètres
      let margin = 30;
      translate(margin * 2, margin * 3);

      // séparer le texte en lettres
      var textNoSpace = mot.replaceAll(" ", "");
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
  function abstraction(){
    background(255);
    var textAbstraction = $('#abstraction-text').val();
    mot =  textAbstraction;
    if(mot == undefined){
      errorMessage();
    }
    else{
      // textWrap(CHAR);
      textLeading(35);
      textSize(30);
      newText = mot.replace(/.{2}/g, '$&\n')
      console.log(newText);
      text(newText, width/2, height/2, width - 80, height - 80);
    }
  }

  // nouvelle fonction permet d'écrire un texte avec un inter-mot aléatoire
  function espacement(){
    background(255);
    textLeading(80);
    var textEspacement = $('#espacement-text').val();
    mot = textEspacement;
    if(mot == undefined){
      errorMessage();
    }
    else{
      var min = 0;
      var max = 40;
      var newText = mot.replace(/\s/g, function() {
        return " ".repeat(parseInt(Math.random() * (max - min) + min))
      });
      textSize(50);
      text(newText, width/2, height/2, width - 80, height - 80);
    }
  }

  // nouvelle fonction permet de réaliser un carré de 9 carrés avec les lettres du mot
  function squareRepetition(){
    background(255);
    textSize(17);
    var wordRepet = $('#repetition-word').val().toUpperCase();
    mot = wordRepet;
    if(mot == undefined){
      errorMessage();
    }
    else{
      // addWordButton(mot);
      var chars = mot.split('');
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
      // var add = 0;
      // for(var x=1; x<width/; x++){
      //   for(var y=1; y<4; y++){
      //     rect(x * 200, y * 200, 200, 200);
        
      //   }
      // }
      // for(var i=0; i<chars.length; i++){
      //   for(var x=0; x<100; x++){
      //     for(var y=0; y<100; y++){
      //       text(chars[i], x + 10, y + 10);
      //     }
      //   }

      //   // console.log(chars[i]);
      // }
      
    }
  }

  // nouvelle fonction permet de réaliser un carré de 9 carrés avec les lettres du mot
  function repetition(){
    background(255);
    var fontSize = 30;
    textSize(fontSize);
    textFont(monoFont);
    var wordRepet = $('#repetitiontwo-word').val();
    mot = wordRepet;
    // calcul la taille du mot 
    var chars = mot.split('');
    var charsLength = chars.length;
    var wordWidth = charsLength * (fontSize/1.6);

    var blockW = fontSize * 20;
    var blockH = fontSize * 10;

    if(mot == undefined){
      errorMessage();
    }
    else{
      for(var x= 0; x<blockW; x+=wordWidth){
        for(var y= 0; y<blockH; y+=fontSize){
          text(mot, x + 80, y + 80);
        }
      }
    }
  }

  function constellation(){
    background(255);
    translate(200, 400);
    var fontSize = 30; 
    var strConstellation = $('#constellation-text').val();
    var words = strConstellation.split(' ');
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
    var wordConstellation = $('#constellation-word').val();
    var chars = wordConstellation.split('');
    for(var i=0; i<chars.length; i++){
      var randomX = random(0, 50);
      var randomY = random(-100, 100);
      var charsWidth = fontSize*2 + randomX;
      textSize(fontSize);
      text(chars[i], i * charsWidth, randomY);
    }

  }

  function replaceLetter(){
    var replacedLetter = $('#replaced-letter-val').val().toUpperCase();
    var replaceLetter = $('#replace-letter-val').val().toUpperCase();
    // console.log(replacedLetter, replaceLetter, mot);
    if(mot == undefined){
      errorMessage();
    }
    else{
      var newWord = mot.replaceAll(replacedLetter, replaceLetter);
      addWordButton(newWord);
      mot = newWord;

    }

  }

  // function repeatLetter(){
  //   var repeatedLetter = $('#repeated-letter-val').val().toUpperCase();
  //   var repeatedLetterNb = $('#repeated-letter-nb').val();
  //   console.log(repeatedLetter, repeatedLetterNb, mot);
  //   if(mot == undefined){
  //     errorMessage();
  //   }
  //   else{
  //     for(var x = 0; x < repeatedLetterNb*40; x=x+60){
  //       console.log(x);
  //       addLetter(repeatedLetter, x + 100, 100);
  //     }
  //   }
  // }

  function repeatLetter(){
    var repeatedLetter = $('#repeated-letter-val').val().toUpperCase();
    var repeatedLetterNb = $('#repeated-letter-nb').val();
    console.log(repeatedLetter, repeatedLetterNb, mot);
    if(mot == undefined){
      errorMessage();
    }
    else{
      var newLetter = repeatedLetter; 
      for(var i= 0; i<repeatedLetterNb-1; i++){
        newLetter = newLetter + repeatedLetter;
      }
      var newWord = mot.replaceAll(repeatedLetter, newLetter);
      addWordButton(newWord);
      mot = newWord;
    }
  }

  function repeatWord(){
    var repeatedWordNb = $('#repeated-word-nb').val();
    console.log(repeatedWordNb);
    if(mot == undefined){
      errorMessage();
    }
    else{ 
      for(var i= 0; i<repeatedWordNb-1; i++){
        mot = mot + " " + mot;
      }
      // console.log(mot);
      addWordButton(mot);
    }
  }

  function createCircle(rayon){
    background(255);
    if(mot == undefined){
      errorMessage();
    }
    else{
      var motArray = mot.split("");
      console.log(motArray);
      let r = rayon;
      let theta = 0;
      translate(width / 2, height / 2);
      let x = r * cos(theta);
      let y = r * sin(theta);
    
      for (let i = 0; i < motArray.length; i++) {
        rotate(QUARTER_PI / 1.25);
        text(motArray[i], x, y);
      }
    }
  }

  function fillCircle(fontSize, circleSize){
    var words = mot.split("");
    var wordCounter = 0;
    
    // typo
    // textSize(int(fontSize));
    // var tsize = int(fontSize);
    textSize(60);
    var tsize = 60;
    
    // ellipse position and size
    var cornerX = 0;
    var cornerY = 0;
    // var w = circleSize;
    // var h = circleSize;
    var w = width;
    var h = height;
    // translate(width / 2, height / 2);

    // draw
    background(255);

    // display circle
    ellipseMode(CORNER);
    //stroke(0); 
    noFill();
    noStroke();
    ellipse(cornerX, cornerY, w, h);
    //rect(cornerX, cornerY, w, h);
    fill(0);
    // display the text
    for (var i = 1; i < 30; i++) {
      if (wordCounter >= words.length) break;
      var a = asin((0.5*h-tsize*i)/(0.5*h));
      // max length for this line
      var maxlen = 0.9*pow(cos(a), 1.9)*w;
      // min start coordinates for this line
      var x = cornerX + 0.5*(w-maxlen);
      var y = cornerY + tsize*(i-0.5);
      // how much words fit in this space?
      var linetext = words[wordCounter];
      if (textWidth(linetext) <= maxlen) {
        var nbWords = 0;
        while ((textWidth(linetext) < maxlen) && (wordCounter+nbWords < words.length - 1)) {
          nbWords++;
          linetext = linetext + " " + words[wordCounter+nbWords];
          console.log(linetext + " : " + textWidth(linetext) + " / " + maxlen);
        }
       linetext = words[wordCounter];
       for (var j = 0; j < nbWords-1; j++) {
         wordCounter++;
         linetext = linetext + " " + words[wordCounter];
       }
       wordCounter++;
       text(linetext, x, y+tsize);
      }
    }
  }

  function fillShape(shape){
    

    if(mot == undefined){
      errorMessage();
    }
    else{

      background(255);

      var words = mot.split("");
      var letterCounter = 0;
      var fontSize = 25;

      textSize(fontSize);
      
      imageMode(CENTER);

      img = loadImage("assets/shape-" + shape + ".png", function () {
        console.log(shape + " loaded");
      
        img.loadPixels();
        
        // on passe sur tous les pixels de l'image
        for(var x = 0; x < img.width; x+=fontSize){
          for(var y = 0; y < img.height; y+=fontSize){
            var pix = img.get(x, y);
            // on remplit la forme avec la couleur du pixels + on fait varier cette couleur suivant la position de la souris
            //fill(pix);
            // on redessine le pixel
            if(pix[3] === 255){
              if(letterCounter < words.length){
                if(direction == "bas"){
                  text(words[letterCounter], x, y); 
                }
                else{
                  text(words[letterCounter], y, x); 
                }
                
                letterCounter ++;
              }
            }
          }
        }
      });
    }
  }

  function changeDirection(newDirection){
    direction = newDirection;
    if(direction == 'haut'){
      $("#haut").addClass('active');
      $("#bas").removeClass('active');
    }
    else{
      $("#bas").addClass('active');
      $("#haut").removeClass('active');
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
    <div class="gui-group click-btn mode-selection">
      <h2>Choisir un mode</h2>
      <div class="gui-input">
        <button onclick="showConstellation()">Constellation</button>
      </div>
      <div class="gui-input">
        <button onclick="showReseau()">Réseau</button>
      </div>
      <div class="gui-input">
        <button onclick="showRepetition()">Répétition</button>
      </div>
      <div class="gui-input">
        <button onclick="showRepetitionTwo()">Répétition 2</button>
      </div>
      <div class="gui-input">
        <button onclick="showAbstraction()">Abstraction</button>
      </div>
      <div class="gui-input">
        <button onclick="showEspacement()">Espacement</button>
      </div>
      <div class="gui-input">
        <button onclick="showGrille()">Grille</button>
      </div>
      <div class="gui-input">
        <button onclick="showPermutation()">Permutation</button>
      </div>
      <div class="gui-input">
        <button onclick="showSoleil()">Soleil ?</button>
      </div>
    </div>

    <div class="gui-group submit-btn permutation-mode">
      <h2>Écrire un mot de moins de 9 lettres</h2>
      <div class="gui-input">
        <input id="repetition-word" type="text" placeholder="écrire ici">
      </div>
      <div class="gui-input ok-btn">
        <button onclick="squareRepetition()">Ok</button>
      </div>
    </div>

    <div class="gui-group submit-btn constellation-mode">
      <h2>Écrire un texte (constellation)</h2>
      <div class="gui-input">
        <textarea id="constellation-text" placeholder="écrire ici"></textarea>
      </div>
      <div class="gui-input ok-btn">
        <button onclick="constellation()">Ok</button>
      </div>
      <h2>Écrire un mot (constellation)</h2>
      <div class="gui-input">
        <input id="constellation-word" placeholder="écrire ici">
      </div>
      <div class="gui-input ok-btn">
        <button onclick="constellationWord()">Ok</button>
      </div>
    </div>

    <div class="gui-group submit-btn repetition-mode">
      <h2>Écrire un mot de moins de 9 lettres</h2>
      <div class="gui-input">
        <input id="repetition-word" type="text" placeholder="écrire ici">
      </div>
      <div class="gui-input ok-btn">
        <button onclick="squareRepetition()">Ok</button>
      </div>
    </div> 

    <div class="gui-group submit-btn repetitiontwo-mode">
      <h2>Écrire un mot</h2>
      <div class="gui-input">
        <input id="repetitiontwo-word" type="text" placeholder="écrire ici">
      </div>
      <div class="gui-input ok-btn">
        <button onclick="repetition()">Ok</button>
      </div>
    </div> 

    <div class="gui-group submit-btn espacement-mode">
      <h2>Écrire un texte (espacement)</h2>
      <div class="gui-input">
        <textarea id="espacement-text" placeholder="écrire ici"></textarea>
      </div>
      <div class="gui-input ok-btn">
        <button onclick="espacement()">Ok</button>
      </div>
    </div> 

    <div class="gui-group submit-btn abstraction-mode">
      <h2>Écrire un texte (abstraction)</h2>
      <div class="gui-input">
        <textarea id="abstraction-text" placeholder="écrire ici"></textarea>
      </div>
      <div class="gui-input ok-btn">
        <button onclick="abstraction()">Ok</button>
      </div>
    </div>

    <div class="gui-group submit-btn abstraction-mode">
      <h2>Écrire un texte (grille)</h2>
      <div class="gui-input">
        <textarea id="grille-text" placeholder="écrire ici"></textarea>
      </div>
      <div class="gui-input ok-btn">
        <button onclick="grille()">Ok</button>
      </div>
    </div> 

    <!-- <div class="gui-group click-btn">
      <h2>Choisir un mot</h2>
      <div class="gui-input">
        <button onclick="addWordButton('RESPIRER')">Respirer</button>
      </div>
      <div class="gui-input">
        <button onclick="addWordButton('PRÉSENCE')">Présence</button>
      </div>
      <div class="gui-input">
        <button onclick="addWordButton('ABSENCE')">Absence</button>
      </div>
      <div class="gui-input">
        <button onclick="addWordButton('DEMAIN')">Demain</button>
      </div>
      <div class="gui-input">
        <button onclick="addWordButton('SILENCE')">Silence</button>
      </div>
      <div class="gui-input">
        <button onclick="addWordButton('CONCRET')">Concret</button>
      </div>
      <div class="gui-input">
        <button onclick="addWordButton('BRUT')">Brut</button>
      </div>
    </div> -->
    <!-- <div class="gui-group submit-btn">
      <h2>Remplacer une lettre</h2>
      <div class="gui-input">
        <input id="replaced-letter-val" type="text" placeholder="lettre à remplacer">
      </div>
      <div class="gui-input">
        <input id="replace-letter-val" type="text" placeholder="lettre de remplacement">
      </div>
      <div class="gui-input ok-btn">
        <button onclick="replaceLetter()">Ok</button>
      </div>
    </div>
    <div class="gui-group submit-btn">
      <h2>Répéter une lettre</h2>
      <div class="gui-input">
        <input id="repeated-letter-val" type="text" placeholder="lettre à répéter">
      </div>
      <div class="gui-input">
        <input id="repeated-letter-nb" type="number" placeholder="nombre de répétition">
      </div>
      <div class="gui-input ok-btn">
        <button onclick="repeatLetter()">Ok</button>
      </div>
    </div>
    <div class="gui-group submit-btn">
      <h2>Répéter le mot</h2>
      <div class="gui-input">
        <input id="repeated-word-nb" type="number" placeholder="nombre de répétition" min="2" max="15">
      </div>
      <div class="gui-input ok-btn">
        <button onclick="repeatWord()">Ok</button>
      </div>
    </div>
    <div class="gui-group click-btn">
      <h2>Remplir une forme</h2>
      <div class="gui-input">
        <button onclick="fillShape('02')">Cercle</button>
      </div>
      <div class="gui-input">
        <button onclick="fillShape('01')">Triangle</button>
      </div>
      <div class="gui-input">
        <button onclick="fillShape('03')">Z</button>
      </div>
      <div class="gui-input">
        <button onclick="fillShape('04')">Burger</button>
      </div>
      <div class="gui-input">
        <button onclick="fillShape('05')">Carl</button>
      </div>
      <div class="gui-input">
        <button onclick="fillShape('06')">Triangles</button>
      </div>
      <div class="gui-input">
        <button onclick="fillShape('07')">Enchaînement</button>
      </div>
      <div class="gui-input">
        <button onclick="fillShape('08')">Cadre</button>
      </div>
      <div class="gui-input">
        <button onclick="fillShape('09')">Zigouigouis</button>
      </div>
      <br>
      <br>
      <h2>Choisir le sens</h2>
      <button onclick="changeDirection('haut')" id="haut">Haut</button>
      <button onclick="changeDirection('bas')" id="bas" class="active">Bas</button>
    </div> -->
    
  	`;
    $("#guiWrapper").html(markup);
  }