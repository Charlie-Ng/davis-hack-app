<?PHP
header("Access-Control-Allow-Origin: *");

$APP_ID = "2e7319bb";
$APP_KEY = "c8ee9707a0cda61af407bed933a39b37";
//$ingredient = "1%20large%20apple";
$input = $_GET['input'];
$numResult = $_GET['numResult'];
$minCalories = $_GET['minCalories'];
$maxCalories = $_GET['maxCalories'];
$healthOption = $_GET['healthOption'];

$ingredient = rawurlencode($input);

$numResult = rawurlencode($numResult);

$url = "https://api.edamam.com/diet?q=" . $ingredient
      . "&app_id=" . $APP_ID . "&app_key=" . $APP_KEY
      . "&from=0&to=". $numResult . "&calories=gte%20"
      . $minCalories . ",%20lte%20" . $maxCalories
      . "&health=" . $healthOption;

$response = file_get_contents($url);

echo $response;

?>
