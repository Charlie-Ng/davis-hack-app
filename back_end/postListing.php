<?php

header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "davishackadmin";
$password = "davishack2016";
$dbname = "davishack";

$latitude = $_GET['latitude'];
$longtitude = $_GET['longtitude'];
$location = $_GET['location'];
$food = urlencode($_GET['food']);
$user = $_GET['user'];
$appTime = $_GET['appTime'];
$appDate = urlencode($_GET['appDate']); 
$calories = $_GET['calories']; 
$fat = $_GET['fat']; 
$carbon = $_GET['carbon']; 
$protein = $_GET['protein'];  
$phoneNumber = $_GET['phoneNumber']; 

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO list (latitude, longtitude, location, food, user, appTime, calories, fat, carbon, protein, phoneNumber, appDate)
    VALUES ('$latitude', '$longtitude', '$location', '$food', '$user', '$appTime', '$calories', '$fat', '$carbon', '$protein', '$phoneNumber', '$appDate')";
    // use exec() because no results are returned
    $conn->exec($sql);
    //echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>
