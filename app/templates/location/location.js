
(function() {

angular.module("appControllers")
    .controller("locationCtrl", ["$scope", '$http', '$timeout',function ($scope, $http, $timeout) {

        $scope.listUrl = 'http://shawnxiang.com/lunchbox/getListing.php'; // The url of our search

        $scope.results = [];

        $scope.showList = function() {

            var oneItem = {};

            $scope.showResult();

            console.log("visited");

            $http.get($scope.listUrl+'?latitude='+$scope.lat+'&longtitude=' + $scope.lng)

                .success(function(data, status) {
                    console.log(data);
                    //$scope.result = data['hits']; // Show result from server in our <pre></pre> element
                    for(var i = 0; i < data.length; i++) {
                        var tmp = data[i];
                        console.log(tmp.calories);
                        oneItem["calories"] = tmp.calories;
                        oneItem["fat"] = tmp.fat;
                        oneItem["carbon"] = tmp.carbon;
                        oneItem["protein"] = tmp.protein;
                        oneItem["location"] = tmp.location;
                        oneItem["food"] = tmp.food;
                        oneItem["user"] = tmp.user;
                        oneItem["appDate"] = tmp.appDate;
                        oneItem["appTime"] = tmp.appTime;

                        console.log(oneItem);

                        $scope.results.push(oneItem);
                        oneItem = {};
                    }



                })
                .error(function(data, status) {
                    console.log("failed");
                    $scope.data = data || "Request failed";
                    $scope.status = status;
                    $scope.isLoading = false;
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