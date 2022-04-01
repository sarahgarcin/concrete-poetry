<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Générateur de poèmes | Wall</title>
  
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body class="wall">

  <main>
    <h1>
      <a href="index.html" title="Retour">
        <---------- Générateur de poèmes
      </a>
    </h1>
    <ul class="poetry-wall">
    <?php 
      $imagePath = 'images';
      // $files = array_diff(scandir($imagePath), array('.', '..'));
      $files = preg_grep('/^([^.])/', scandir($imagePath));
      foreach($files as $file):?>
        <li>
          <figure>
            <img src="<?php echo $imagePath . '/' . $file?>">
          </figure>
        </li>
      <?php endforeach;?>
    </ul>
  </main>

</body>

</html>



