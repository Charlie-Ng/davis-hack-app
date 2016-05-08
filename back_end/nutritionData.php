<?PHP
header("Access-Control-Allow-Origin: *");

$APP_ID = "2e7319bb";
$APP_KEY = "c8ee9707a0cda61af407bed933a39b37";
//$ingredient = "1%20large%20apple";
$input = $_GET['input'];
//echo $input;

$ingredient = rawurlencode($input);
//echo "received";
//echo $ingredient;

$url = "https://api.edamam.com/api/nutrition-data?app_id=" . $APP_ID . "&app_key=" . $APP_KEY. "&ingr=" . $ingredient;

$response = file_get_contents($url);

echo $response;

?>
