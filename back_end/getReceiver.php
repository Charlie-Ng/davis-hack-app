<?PHP
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "davishackadmin";
$password = "davishack2016";
$dbname = "davishack";

$id = $_GET['id'];

$counter = (int) 0;

//echo $query_string;

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM request WHERE receiver='$id'");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);


    foreach($stmt->fetchAll() as $k=>$v) {
        if ($counter === 0){
          echo "[";
        }
        echo json_encode($v) . ",";

        $counter++;
    }

    if ($counter > 0){
      echo "{}]";
    }
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;

?>
