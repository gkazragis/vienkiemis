<?php
$errors = '';
$myemail = 'giedriusnnt@gmail.com';//<-----Put Your email address here.
if(empty($_GET['name'])  ||
   empty($_GET['email']) ||
   empty($_GET['meniu']) ||
   empty($_GET['message']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_GET['name'];
$email_address = $_GET['email'];
// $menu_list = $_POST['meniu'];
// $message = $_POST['message'];
// also add dates !!!
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail;
	$email_subject = "Contact form submission: $name";

	$email_body = "You have received a new message. ".
	// " Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message \n Meniu: $menu_list";
  " Here are the details:\n Name: $name \n Email: $email_address \n ";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";
echo "mail to " . $to;
	mail($to,$email_subject,$email_body,$headers);

	//redirect to the 'thank you' page
	header('Location: contact-form-thank-you.html');
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>
