

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
		<img src="../img/icons/galka.png" alt="" class="success__img">
		<p>Успешно!</p>
		<p>Ваша заявка успешно принята!</p>
		<a href='#' id="777" class="success__btn"><span>OK</span></a>
	</div>
		
	<div class="contact_wrapper">
		<h1>Форма обратной связи</h1>
		<form action="user.php" method="post" class="contact_form"  id="ok" name="myForm" >
		<p>Имя</p>
			<div class="item" id="first">			
				<input type="text" name="first_name" placeholder="">
				<span class="error">Некорректное имя</span>
				<span class="request">Укажите имя</span>
			</div>
			
			<p>Фамилия</p>
			<div class="item " id="second">				
				<input type="text" name="last_name" placeholder="">
				<span class="error">Некорректная фамилия</span>
				<span class="request">Укажите  фамилию</span>
			</div>

			<p>Email</p>
			<div class="item" id="third">			
				<input id ="111" type="email" name="email" placeholder="">
				<span class="error">Некорректный Е-майл</span>
				<span class="request">Укажите Е-майл</span>
			</div>

			<p>Дата рождения</p>
			<div class="item" id="fourth">			
				<input type="text" name="age" placeholder="" id="age"  maxlength="10">
				<span class="error">Некорректная дата<br>Укажите дату в формате дд.мм.гггг</span>
				<span class="request">Укажите дату в формате дд.мм.гггг</span>
			</div>

			<p>Номер телефона</p>
			<div class="item" id="fifth">			
				<input type="text" name="tel" placeholder="+7 (___)___-__-__"  class="tel">
				<span class="error">Некорректный номер телефона</span>
				<span class="request">Укажите телефон</span>
			</div>

			<p>Город</p>
			<div class="item" id="sixth">			
				<input type="text" name="city" placeholder="">
				<span class="error">Некорректное название города</span>
				<span class="request">Укажите город</span>
			</div>

			<p>Портфолио</p>
			<div class="item" id="seventh">			
				<label for="file" class="feedback__label"  id="filee">
					<span class="feedback__text">Выберите файл</span>
					<span class="request">Выберите файл</span>
					<input type="file"  id="file" name="document" class="feedback__file input_error">
					<div class="feedback__file_name" id="filename"></div>
				</label>
				<span class="error">Выберите файл портофолио</span>
			</div>

			<input type="submit" id="999" value="Отправить заявку" class="feedback__button">
		</form>

	</div>
		
</div>
<script src="js/main.js"></script>


</body>
</html>
