/**
 * Created by kitchiong on 5/7/16.
 */

(function() {

    angular.module('appControllers').controller('makeCtrl',
        ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

            $scope.url = 'http://shawnxiang.com/lunchbox/recipeSearch.php?input='; // The url of our search

            $scope.postUrl = 'http://shawnxiang.com/lunchbox/postListing.php?';

            $scope.results = [];

            $scope.isLoading = false;

            $scope.keywords = {"text" : ""};

            $scope.search = function() {

                var oneItem = {};

                $scope.isLoading = true;
                var q = $scope.keywords.text;

                $http.get($scope.url+q)

                    .success(function(data, status) {

                        //$scope.result = data['hits']; // Show result from server in our <pre></pre> element
                        for(var i = 0; i < data['hits'].length; i++) {

                            var tmp = data['hits'][i]["recipe"];
                            oneItem["calories"] = tmp.calories;
                            oneItem["fat"] = tmp.totalNutrients["FAT"]["quantity"];
                            oneItem["carbon"] = tmp.totalNutrients["CHOCDF"]["quantity"];
                            oneItem["protein"] = tmp.totalNutrients["PROCNT"]["quantity"];
                            oneItem["label"] = tmp['label'];

                            oneItem["url"] = tmp.url;
                            oneItem["image"] = tmp.image;

                            $scope.results.push(oneItem);
                            oneItem = {};
                        }

                        $scope.isLoading = false;

                    })
                    .error(function(data, status) {
                        console.log("failed");
                        $scope.data = data || "Request failed";
                        $scope.status = status;
                        $scope.isLoading = false;
                    });
            };

            $scope.store = function() {
                $scope.showResult();
                console.log("result " + $scope.lat);
                $http.get($scope.url+'?latitude='+$scope.lat+'&longtitude=' + $scope.lng+'').
                    success(function(data, status) {
                        $scope.status = status;
                        console.log($scope.fat);
                    })
                    .
                    error(function(data, status) {
                        console.log("failed");
                        $scope.data = data || "Request failed";
                        $scope.status = status;
                    });
            };

            $scope.lat = "0";
            $scope.lng = "0";
            $scope.accuracy = "0";
            $scope.error = "";
            $scope.model = { myMap: undefined };
            $scope.myMarkers = [];

            $scope.showResult = function () {
                return $scope.error == "";
            };


            $scope.mapOptions = {
                center: new google.maps.LatLng($scope.lat, $scope.lng),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            $scope.showPosition = function (position) {
                $scope.lat = position.coords.latitude;
                $scope.lng = position.coords.longitude;
                $scope.accuracy = position.coords.accuracy;
                $scope.$apply();

                var latlng = new google.maps.LatLng($scope.lat, $scope.lng);
                //$scope.model.myMap.setCenter(latlng);
                //$scope.myMarkers.push(new google.maps.Marker({ map: $scope.model.myMap, position: latlng }));
            };

            $scope.showError = function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        $scope.error = "User denied the request for Geolocation.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        $scope.error = "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        $scope.error = "The request to get user location timed out.";
                        break;
                    case error.UNKNOWN_ERROR:
                        $scope.error = "An unknown error occurred.";
                        break;
                }
                $scope.$apply();
            };

            $scope.getLocation = function () {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError);
                }
                else {
                    $scope.error = "Geolocation is not supported by this browser.";
                }
            };

            $scope.getLocation();

            $scope.returnKey = function(event) {

                if(event.which === 13) {
                    $scope.search();
                }
            };

        }]);
}());