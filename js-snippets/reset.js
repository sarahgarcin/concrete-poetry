function resetAll(){
    State.textColor = "#000";
    State.background = "#FFF";
    State.textUppercase = false;
    State.textLowercase = false;
    originalText = "Écris ton poème ici…";
    State.text = originalText;
    State.fontSize =  40;
    State.lineHeight = 40;
    State.textFont = font;
    State.textX = margin;
    State.textY = margin;

    writingMode = true;
    moveMode = false;
    
    repetitionMode = false,
    abstractionMode = false,
    espacementMode = false,
    permutationMode = false,
    grilleMode = false,
    squareMode = false,
    constellationMode = false,
    soleilMode = false,
    formeMode = false;



}