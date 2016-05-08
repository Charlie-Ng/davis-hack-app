<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "davishackadmin";
$password = "davishack2016";
$dbname = "davishack";

$sender = $_GET['sender'];
$receiver = $_GET['receiver'];
 

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO request (sender, receiver)
    VALUES ('$sender', '$receiver')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>
