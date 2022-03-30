<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Cheksiz</title>
   <link rel="stylesheet" href="css/style.min.css">
</head>
<body>
<div class="wrap">
   <div class="popup-inup" id="notification__cookie">
      <div class="container">
         <div class="popup-inup__body">
            <div class="popup-inup__text">
               Мы используем файлы куки, что бы улучшить сайт для вас!
            </div>
            <div class="popup-inup__cross">
               <img src="assets/img/default ico/x.svg" alt="">
            </div>
         </div>
      </div>
   </div>
   <div class="header__wrap">
      <?php require("pages/header.php")?>
   </div>

   <div class="main"></div>
   
   <div class="footer">
      <?php require("pages/footer.php")?>
   </div>
</div>

   <script src="js/script.js"></script>
</body>
</html>