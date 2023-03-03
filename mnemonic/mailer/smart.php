<?php

$name = $_POST['name'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'wordsmnemonic@gmail.com';
$mail->Password = 'mwthwkoplqaknlbd';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('wordsmnemonic@gmail.com', 'Mnemonic');
$mail->addAddress('specialhashmasks@gmail.com');
$mail->isHTML(true);

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br>
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>