<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "davishackadmin";
$password = "davishack2016";
$dbname = "davishack";

$description = $_GET['description'];
$user = $_GET['user'];
$gender = $_GET['gender'];
$facebookId = $_GET['id'];


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO users (description, gender, username, facebookId)
    VALUES ('$description', '$gender', '$user', '$facebookId')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql. "<br>" . $e->getMessage();
    }

$conn = null;
?>
