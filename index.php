<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
//   $say = htmlspecialchars($_POST['first_name']);
//   $to  = htmlspecialchars($_POST['myForm']);

//   echo  $say, ' ', $to;

print_r($_POST);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/style.css">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
<div  id="bg"></div>
<div class="container">
	<div class="success" id="322">
		<img src="img/icons/galka.png" alt="" class="success__img">
		<p>Успешно!</p>
		<p>Ваша заявка успешно принята!</p>
		<a href='#' id="777" class="success__btn"><span>OK</span></a>
	</div>
		
	<div class="contact_wrapper">
		<h1>Форма обратной связи</h1>
		<form action="user.php" method="post" class="contact_form"  id="ok" name="myForm" >
			
			<p>Имя</p>
			<div class="item">			
				<input type="text" name="first_name" placeholder="">
				<span class="error"></span>
			</div>
			
			<p>Фамилия</p>
			<div class="item">				
				<input type="text" name="last_name" placeholder="">
				<span class="error"></span>
			</div>

			<p>Email</p>
			<div class="item">			
				<input id ="111" type="email" name="email" placeholder="">
				<span class="error"></span>
			</div>

			<p>Дата рождения</p>
			<div class="item">			
				<input type="text" name="age" placeholder="" id="mydata" maxlength="10">
				<span class="error"></span>
			</div>

			<p>Номер телефона</p>
			<div class="item">			
				<input type="text" name="tel" placeholder="+7 (___)___-__-__"  class="tel">
				<span class="error"></span>
			</div>

			<p>Город</p>
			<div class="item">			
				<input type="text" name="city" placeholder="">
				<span class="error"></span>
			</div>

			<p>Портфолио</p>
			<div class="item">			
				<label for="file" class="feedback__label"  id="filee">
					<span class="feedback__text">Выберите файл</span>
					<input type="file"  id="file" name="document" class="feedback__file">
					<div class="feedback__file_name" id="filename"></div>
				</label>
				<span class="error"></span>
			</div>

			<input type="submit" id="999" value="Отправить заявку" class="feedback__button">
		</form>
		<!-- <iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe> -->
	</div>
		
</div>
<script src="js/main.js"></script>



</body>
</html>
