04/07/2022 _ v0.5

## question Demian - retours 21/06
- Site hébergé sur infomaniak, avec un nom de domaine spécifique
- Non référencé mais accessible pour tous aver le lien
- Nom du projet Poème Graphique 
- Enlever le livre d'or / car pb de modération
- Question A4 ou A5 ? 
- d'abord les modes, puis les fonctionnalités typo, puis le bouton télécharger (Demian va me faire un screenshot) 

## to do
### pour demain
- ok - bouton couleur 
- ok - mettre le header de la même couleur que le fond
- ok - interface : bouton rouge quand mode actif 
- bouton fit 
- ok - peaufiner espacement
- ok - peaufiner constellation
- ok - répétition: enlever petit / grand
- ok - debug carrelage

### Espacement
- ok - mettre des espaces au début, ne pas aligner à gauche (aligner au centre)

### Constellation 
- ok - parfois ça sort du cadre

### Répétition 
- ok - Enlever petit grand

### Permutation 
- petit bug sur la taille typo
- majuscule / minuscule ne fonctionne pas 
- colonnes égales 

### Carrelage
- ok - Bug sur les lettres : quand 5 ou 6 lettres ça ne fonctionne pas. Problème avec le /3 dans la boucle for
- ok - Quantité de lettres par carrés = ok 

### All
- mettre le header de la même couleur que le fond
- Enlever les boutons liés à la couleurs + ajouter un bouton couleur avec un set de couleurs fond / texte
- Responsive (2 tailles d'écran - petit / grand)
- Ne fonctionne pas sur Safari ?
- augmenter la définition ! 
- desactiver le responsive - mettre un message d'erreur
- ok - Ajouter des shortcuts + les afficher quand on passe la souris sur un éléments  
- Mettre une license open-source sur le projet + Readme 
- ok - remettre expression avec les formes = pouvoir dessiner directement dans l'interface --> ça poser des problèmes 
- Certificat SSL

- page d'accueil
  + Titre
  + Bouton web app = Écrire (mène à l'app)
  + Bouton Explication = Comprendre (mène aux textes explicatifs)
- page explication 
  + titre = Poème Graphique
  + texte explicatif du projet = pédagogique
  + texte explicatif du projet = technique application
  + vidéo démo 
  + crédits / colophon 
  + mode d'emploi ? vidéo explicative ? capsules vidéos
  + explication police de caractère (petit texte) 

## Done v0.4

### Répétition
- ok - Majuscule / Minuscule
- ok - répétition nombre aléatoire pour le nombre de répétition + typographie adaptatif
- ok - éditer le texte modifié

### Abstraction
- ok - faire typo variable
- non - Abstraction = faire des colonnes 
- ok - Abstraction = quand on reclique dessus, il coupe 1 lettre, 2 lettres, 3 lettres, 4 lettres etc.

### Permutation 
- ok - Mettre une limite de mots

### All
- ok - développer soleil 
- ok Majuscule / Minuscule -> bug dans le textarea, on peut pas choisir 
- ok aligner correctement les 2 cadres (petit décalage)
- ok - aligné le cadre en haut et en bas
- ok cursor main quand on passe en mode visualisation
- ok - enlever le resize sur le textarea
- ok quand on passe de carrelage à édition = bug
- ok - menu fixe aligné à gauche + Réinitialiser + édition / visualisation + Télécharger à mettre sur la gauche (sur la 2ème ligne)
- ok - menu ne doit pas bouger
- ok - responsive => avoir un truc adaptatif ? bouton qui s'agrandisse
- ok - ne pas décaler les 2 fenêtres
- - ok - Mettre en A4 précisemment, une page dans la page = export PDF A4
- ok - Changement de couleur de fond quand on est en mode édition par exemple 
- ok - Dans grille - menu contextuel enlever taille typo 
- ok - Permutation = faire des colonnes 
- ok - Améliorer la tête de l'interface (voir screenshot demian)
- ok - Marquer la différence graphique entre les modes et les fonctionnalités de mise en page = exemple blanc et gris 
- ok - Le bouton T = éditer le texte de base 
- ok - Ajouter un menu contextuel pour les fonctions typo -> pour répétition / abstraction / espacement / permutation = éditer le texte modifié 
- ok - Enlever le wall.php et la possibilité d'enregistrer, on garde seulement la fonction téléchargement
- ajouter un bouton options 
  + ok - bouton Reset
  + ok - Fonctionnalité Majuscule / Minuscule 
  + ok - Enlever bouton disquette
  + ok - intégrer le bouton download dans la part

## Done v0.3
- ok - garder version v1bis
- ok ---> écrire le texte directement dans la page 
- ok ---> pouvoir déplacer le block en drag and drop 
- ok ---> interface plus simple avec des pictos (la page prend toute la page = barre d'outil en bas ou en haut)
- ok - ajouter un bouton négatif / positif (noir / blanc)
- ok - constellation automatisé mot / texte (pas de séparation, si mot = option mot si phrase = option phrase)
- ajouter un bouton options 
  + ok - négatif / positif
  + ok - rouge 
  + ok - choix de la font (bouton simple mono/medium)
  + ok - taille = grand / petit / adaptatif (bouton simple d'interface)

