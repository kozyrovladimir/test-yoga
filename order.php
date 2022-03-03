<?php
$email_to = 'nata_yurchenko81@mail.ru';
$tell = $_POST['tell'];
$name = $_POST['name'];
$headers = "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: $name\r\n";

$message = "Имя: $name
\nТелефон: $tell";




$subject='Заказать обратный звонок';



if(mail($email_to, $subject, $message, $headers)){
    header("location:http://html.glorydesign.ru/Yogi");

}else{
    echo 'failed';
}


