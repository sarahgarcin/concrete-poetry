04/07/2022 _ v0.6
03/08/2022 _ v0.7
08/09/2022 _ v0.8

### DEBUG

#### Espacement 
- ok- Bug quand on passe du textarea au movetext

#### Répétition
- ok - Quand on clique répétition le première ligne est toujours coupée, possible de faire commencer le texte par la fenêtre ?
- ok - bug quand je suis en répétition et je fais édition, et je retourne en visualisation si je clic sur le texte directement ceci devient super petit.

#### Constellation
- ok - si je sélectionne plusieurs mots rouge et après je sélectionne le mode majuscule, la couleur rouge disparaît. Entre autre si après je retourne à minuscule la sélection des mots en rouge disparaît.
- ok - si je passe à répétition me garde le menu sélection texte en rouge.
- ok - même chose si je passe de constellation à abstractions

#### Permutation 
- ~ Permutation selons les mots longs le texte sort de la fenêtre

#### Grille
- La grille aussi commence avec le texte coupé, et selon la taille du texte la fenêtre sort du browser. entre autre si je clique sur une lettre comme “r” il transforme en rouge toutes le lettres r, et la deuxième lettre r n’est pas influente
- ok - si je passe au majuscule ne ma garde pas les mots en rouge

#### Carrelage
- ok - même problème au carrelage, et si je passe au majuscule ne ma garde pas les mots en rouge

#### Forme
- forme, si la croix, le a et le dunats on peut le faire un peu plus grand

### ALL
- problème quand on passe d'un mode qui enregistre le texte dans le textarea à un mode qui ne l'enregistre pas (exemple de répétition à Constellation) == enregistrer le texte original quelque part pour le réinitialiser à chaque fois…
- problème de marges dans plusieurs modes 
- ok - la fenêtre de dessin sur mon ordi est juste, et quand je laisse aussi la barre des instrument est trop petite, peut être la faire encore un poil plus petite ?
- parfois le réinitialise ne marche pas comme depuis abstraction
- ok - réinitialiser me garde aussi les options couleur texte rouge
- Debug menu contextuel mot couleur 
- Gros debug
- Clean code
- Ne fonctionne pas sur Safari ?


## Done v0.8
--> la sélection d'un mot ou d'une lettre en rouge me cause trop de bug, j'ai virer cette fonction qui me parait trop compliqué par rapport aux manières d'interargir dans l'app

## Done v0.7

### Permutation 
- ~ - petit bug sur la taille typo
- ~ - colonnes égales 

### Répétition 
- ok - petit problème taille typo quand majuscule et monospace

### Carrelage 
- ok - Bug d'affichage à résoudre (changer les paramètres)

### All
- ok - 1 bouton negatif / positif
- ok - 1 bouton couleur si négatif = fond de couleur, si positif fond blanc
- ok - Changer un mot de couleur = 1 ligne de mots avec limitation du nombre de mot qui apparait + espace de travail plus petit 
  + ok - Constellation 
  + ok - Grille
  + ok - Carrelage
  + ok - Soleil
- ok - Certificat SSL 

### Pages autres
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


## Done v0.6
- ok - augmenter la définition ! 
- ok - desactiver le responsive - mettre un message d'erreur
- ok - Responsive (2 tailles d'écran - petit / grand)
- ok - bouton couleur 
- ok - mettre le header de la même couleur que le fond
- ok - interface : bouton rouge quand mode actif 
- ok - peaufiner espacement
- ok - peaufiner constellation
- ok - répétition: enlever petit / grand
- ok - debug carrelage

### Permutation 
- ok - majuscule / minuscule ne fonctionne pas 

### Espacement
- ok - mettre des espaces au début, ne pas aligner à gauche (aligner au centre)

### Constellation 
- ok - parfois ça sort du cadre

### Répétition 
- ok - Enlever petit grand

### Carrelage
- ok - Bug sur les lettres : quand 5 ou 6 lettres ça ne fonctionne pas. Problème avec le /3 dans la boucle for
- ok - Quantité de lettres par carrés = ok 

### ALL
- ok - mettre le header de la même couleur que le fond
- ok - Enlever les boutons liés à la couleurs + ajouter un bouton couleur avec un set de couleurs fond / texte
- ok - Ajouter des shortcuts + les afficher quand on passe la souris sur un éléments  
- Mettre une license open-source sur le projet + Readme 
- ok - remettre expression avec les formes = pouvoir dessiner directement dans l'interface --> ça poser des problèmes 

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


## question Demian - retours 21/06
- Site hébergé sur infomaniak, avec un nom de domaine spécifique
- Non référencé mais accessible pour tous aver le lien
- Nom du projet Poème Graphique 
- Enlever le livre d'or / car pb de modération
- Question A4 ou A5 ? 
- d'abord les modes, puis les fonctionnalités typo, puis le bouton télécharger (Demian va me faire un screenshot) 

