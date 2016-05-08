<?php

$tele = $_GET['tele']; 
$sender = $_GET['name']; 

$to = $tele.'@txt.att.net'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $email_subject = "APPOINTMENT";
    $email_body = $sender . " wants to meet with you for lunch";
    $headers = "From: noreply@lunchbox.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $headers .= "Reply-To: noreply@lunchbox.com";
   $result = mail($to,$email_subject,$email_body,$headers);

    echo $result; 

$to = $tele.'@tmomail.net'; 
$result = mail($to,$email_subject,$email_body,$headers);

  echo $result; 

$to = $tele.'@vtext.com'; 
mail($to,$email_subject,$email_body,$headers);

$to = $tele.'@messaging.sprintpcs.com'; 
mail($to,$email_subject,$email_body,$headers);

?>