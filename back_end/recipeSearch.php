<?PHP

header("Access-Control-Allow-Origin: *");

$APP_ID = "fca31ee5";
$APP_KEY = "cb0b72dd2824c6e5df1c04650841ee90";
//$ingredient = "1%20large%20apple";
$input = $_GET['input'];

$recipe = rawurlencode($input);


$url = "https://api.edamam.com/search?q=" . $recipe . "&app_id=" . $APP_ID . "&app_key=" . $APP_KEY;

$response = file_get_contents($url);

echo $response;

?>
