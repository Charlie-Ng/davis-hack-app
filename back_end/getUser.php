<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "davishackadmin";
$password = "davishack2016";
$dbname = "davishack";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM users");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

    echo "[";

    foreach($stmt->fetchAll() as $k=>$v) {
        echo json_encode($v) . ",";
    }

    echo "{}]";
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;

?>
