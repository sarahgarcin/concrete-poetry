function resetAll(){
    State.textColor = "#000";
    State.background = "#FFF";
    State.textUppercase = false;
    State.textLowercase = false;
    State.text = resetText;
    State.fontSize =  40;
    State.lineHeight = 40;
    State.textFont = font;
    State.textX = margin;
    State.textY = margin;

    repetitionMode = false,
    abstractionMode = false,
    espacementMode = false,
    permutationMode = false,
    grilleMode = false,
    squareMode = false,
    constellationMode = false,
    formeMode = false,
    writingMode = true;

}