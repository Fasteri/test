<?php
$name = "не определено";
$last_name = "не определено";
$email = "не определен";
$age = "не определен";
$tel = "не определен";
$city = "не определен";
$document = "не определен";

if(isset($_POST["first_name"])){
  
    $name = $_POST["first_name"];
}
if(isset($_POST["last_name"])){
  
    $last_name = $_POST["last_name"];
}
if(isset($_POST["email"])){
  
    $email = $_POST["email"];
}
if(isset($_POST["age"])){
  
    $age = $_POST["age"];
}
if(isset($_POST["tel"])){
  
    $tel = $_POST["tel"];
}
if(isset($_POST["city"])){
  
    $city = $_POST["city"];
}
if(isset($_POST["document"])){
  
    $document = $_POST["document"];
}
echo "Имя: $name <br> Фамилия: $last_name <br>Email: $email <br>Дата рождения: $age <br> Телефон: $tel <br> Город: $city <br> Портфолио: $document <br>" ;


//  echo function test_input($data) {
//     $data = trim($data);
//     $data = stripslashes($data);
//     $data = htmlspecialchars($data);
//     return $data;
// }

function clean($value) {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    return $value;
}

?>