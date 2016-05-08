<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "davishackadmin";
$password = "davishack2016";
$dbname = "davishack";

// we need to return the earliest results first 

$latitude = $_GET['latitude']; 
$longtitude = $_GET['longtitude']; 

try {

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $stmt = $conn->prepare("SELECT * FROM list");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

    //echo "[";

    $overall = array(); 

    foreach($stmt->fetchAll() as $k=>$v) {

        $distance = array('diff' => (pow((pow(($v["longtitude"] - $longtitude), 2) + pow(($v['latitude'] - $latitude), 2)), 0.5))); 
        
        //echo $distance['diff'];  

        array_push($v, $distance); 
        
        array_push($overall, $v); 

        //echo json_encode($v) . ",";
    }

     //echo "{}]";

     usort($overall, function($a, $b) { //Sort the array using a user defined function
        return $a->diff > $b->diff ? -1 : 1; //Compare the scores
        });  

     //echo $overall; 
     echo json_encode($overall); 
     //echo "array" . '<pre>'; print_r($overall); echo '</pre>';
   
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;

?>
