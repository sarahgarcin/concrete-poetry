// ------- SHORTCUTS ------- 
$(document).keydown(function(e) {
  console.log(e.which);
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
  // ALT + F
  if (e.altKey && e.which === 70){
    activateForme();
    e.preventDefault();
  }
  // ALT + V
  if (e.altKey && e.which === 86){
    toogleEditView();
    e.preventDefault();
  }

  // ALT + T
  if (e.altKey && e.which === 84){
    exportHighResolution();
    e.preventDefault();
  }

  // ALT + X
  if (e.altKey && e.which === 88){
    resetAll();
    e.preventDefault();
  }

  // ALT + N
  if (e.altKey && e.which === 78 && moveMode == true){
    dayNight();
    e.preventDefault();
  }

  // ALT + M
  if (e.altKey && e.which === 77 && moveMode == true){
    changeFont();
    e.preventDefault();
  }

  // ALT + U
  if (e.altKey && e.which === 85 && moveMode == true){
    changeCase();
    e.preventDefault();
  }

  // ALT + L
  if (e.altKey && e.which === 76 && moveMode == true){
    changeColorRed();
    e.preventDefault();
  }

  
});


// TOOLTIPS

 tippy('.repetitiontwo-mode', {
    content: 'alt + r',
    arrow: true,
    theme: "light",
    placement: 'bottom', 
    delay: [800, 0] // ms
  });

 tippy('.espacement-mode', {
    content: 'alt + e',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms
  });

 tippy('.constellation-mode', {
    content: 'alt + c',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms
  });

 tippy('.abstraction-mode', {
    content: 'alt + a',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms
  });

 tippy('.permutation-mode', {
    content: 'alt + p',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms
  });

  tippy('.grille-mode', {
    content: 'alt + g',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms
  });

  tippy('.square-mode', {
    content: 'alt + k',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms
  });

  tippy('.soleil-mode', {
    content: 'alt + s',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms
  });

  tippy('.forme-mode', {
    content: 'alt + f',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms
  });

  tippy('#export-btn', {
    content: 'alt + t',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms 
  });

  tippy('.toogle-edit-view', {
    content: 'alt + v',
    arrow: true,
    theme: "light",
    placement: 'bottom',
    delay: [800, 0] // ms 
  });

  tippy('.reset', {
    content: 'alt + x',
    arrow: true,
    theme: "light",
    placement: 'bottom', 
    delay: [800, 0] // ms
  });

  // tippy('.day-night', {
  //   content: 'alt + n',
  //   arrow: true,
  //   theme: "light",
  //   placement: 'bottom' 

  // });

  // tippy('.change-font', {
  //   content: 'alt + m',
  //   arrow: true,
  //   theme: "light",
  //   placement: 'bottom' 

  // });

  // tippy('.change-case', {
  //   content: 'alt + u',
  //   arrow: true,
  //   theme: "light",
  //   placement: 'bottom' 

  // });


  // tippy('.change-color', {
  //   content: 'alt + l',
  //   arrow: true,
  //   theme: "light",
  //   placement: 'bottom' 

  // });

  











