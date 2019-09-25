	<?php

require_once ('../libraries/phpmailer.php');
$mail     = new PHPMailer();
$firstName   = $_POST['firstName'];
$email    = $_POST['email'];
$lastName = $_POST['lastName'];
$subject  = $_POST['subject'];
$textAreaMessage  = $_POST['textAreaMessage'];

if (!empty($firstName) && !empty($email) && !empty($lastName) && !empty($textAreaMessage)) {
	$mail->isHTML(false);

	$bodytext = "First name: ".$firstName."\r\n".
	"Last name: ".$lastName." \r\n".
	"Email: ".$email." \r\n".
	"Mensaje: ".$textAreaMessage;

	$mail->FromName = $firstName;
	
	$mail->AddAddress("jadace96@gmail.com", 'Email testing');
	
	$mail->Subject = $subject;
	$mail->Body    = $bodytext;


	if ($mail->Send()) {
		echo '<script>
			alert("Se Envio su correo Correctamente.");
			window.history.go(-1);
		</script>';
	} else {
		echo '<script>
			alert("Hubo un error, Intentalo nuevamente.");
			window.history.go(-1);
		</script>';
	}
} else {
	echo '<script>
				alert("Alguno de los campos estan vacios, Intentelo de nuevo.");
				window.history.go(-1);
			</script>';
}
?>