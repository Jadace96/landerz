<?php
​
require_once ('../libraries/phpmailer.php');
$mail     = new PHPMailer();
$firstName   = $_POST['firstName'];
$email    = $_POST['email'];
$lastName = $_POST['lastName'];
$subject  = $_POST['subject'];
$textAreaMessage  = $_POST['textAreaMessage'];
​
if (!empty($firstName) && !empty($email) ) {
	$mail->isHTML(false);
​
	$bodytext = "First name: ".$firstName."\r\n".
	"Last name: ".$lastName." \r\n".
	"Email: ".$email." \r\n".
	"Mensaje: ".$textAreaMessage;
​
	$mail->FromName = $firstName;
	
	$mail->AddAddress("vlarenas@modyo.com", 'Email test Jorge Daniel ');
	
	$mail->Subject = $subject;
	$mail->Body    = $bodytext;
​
	if ($mail->Send()) {
		echo '<script>
			alert("Mail sended successfully");
			window.history.go(-1);
		</script>';
	} else {
		echo '<script>alert("An error has occurred, Retry.");</script>';
	}
} else {
	echo '<script>
					alert("Some fields are empty, try again");
					window.history.go(-1);
				</script>';
}
?>