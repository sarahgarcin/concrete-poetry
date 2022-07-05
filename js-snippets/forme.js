let formeProcess = false; 
let clickCounter = 0;

// fonction permettant de dessiner, sauvegarder un svg et de le transformer en texte 
// forme ne fonctionne pas => demande trop de ressources 
function activateForme(){
  formeMode = true;
  
  writingMode = false;
  moveMode = true;

  repetitionMode = false;
  espacementMode = false;
  constellationMode = false;
  abstractionMode = false;
  permutationMode = false;
  grilleMode = false;
  squareMode = false;
  soleilMode = false;

  $('.gui-group.change-size').css('display', 'none');

  formeProcess = true;

  if(clickCounter < 9){
    clickCounter ++;
  }
  else{
    clickCounter = 1;
  }
  
}

function forme(){
  console.log("Mode forme", originalText);

  if(State.textUppercase == true){
    originalText = originalText.toUpperCase();
  }
  if(State.textLowercase == true){
    originalText = originalText.toLowerCase();
  }

  var words = originalText.split("");
  let letterCounter = 3;
  var fontSize = 15;

  poster.textSize(fontSize);
  poster.textFont(State.textFont);
  poster.fill(State.textColor);
    
  imageMode(CENTER);

  poster.push();
  poster.translate(State.textX, State.textY);

  img = eval("img" + clickCounter);
  // console.log(img);
  // img = loadImage("assets/shape-0" + clickCounter + ".png", function () {
  //   console.log("shape-0" + clickCounter + " loaded");
    img.loadPixels();

    // on passe sur tous les pixels de l'image
    for(var y = 0; y < img.height; y+=fontSize){
      for(var x = 0; x < img.width; x+=fontSize){
        var pix = img.get(x, y);
        // on redessine le pixel
        if(pix[3] === 255){
          if(letterCounter < words.length){
            poster.text(words[letterCounter], x, y); 
            letterCounter ++;

          }
          else{
            letterCounter = 0;
          }
        }
      }
    }
  //noLoop();

  // if(formeProcess){
    // on passe sur tous les pixels de l'image
    // for(var x = 0; x < img.width; x+=fontSize){
    //   for(var y = 0; y < img.height; y+=fontSize){
    //     var pix = img.get(x, y);
    //     // // on redessine le pixel
    //     if(pix[3] === 255){
    //       // console.log(letterCounter, words.length)
    //       if(letterCounter < words.length){
    //         // console.log(letterCounter, words[letterCounter], x, y);
    //         poster.text(words[letterCounter], x, y); 
    //         letterCounter ++;
    //       }
    //     }
    //   }
    // }
  // }
  // formeProcess = false;
  // noLoop();
  
  // img = loadImage('./assets/shape-01.png');
  // img = loadImage("./assets/shape-01.png", function () {
    //poster.image(img, 0, 0, img.width / 2, img.height / 2);
  // });
  // img = loadImage("assets/shape-0" + clickCounter + ".png", function () {
  //   poster.image(img, 0, 0, img.width / 2, img.height / 2);
  //   console.log("shape-0" + clickCounter + " loaded");
  //   poster.image(img, 0, 0);
  //   console.log(img);
  //   img.loadPixels();
  //   console.log(formeProcess);
  //   if(formeProcess){
  //     // on passe sur tous les pixels de l'image
  //     for(var x = 0; x < img.width; x+=State.fontSize){
  //       for(var y = 0; y < img.height; y+=State.fontSize){
  //         var pix = img.get(x, y);
  //         // console.log(pix);
  //         // on redessine le pixel
  //         if(pix[3] === 255){
  //           if(letterCounter < words.length){
  //             console.log(letterCounter, words[letterCounter]);
  //             poster.text(words[letterCounter], x, y); 
  //             letterCounter ++;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   formeProcess = false;
  //   noLoop();
  // });
  

  poster.pop();
  // formeProcess = false;
}