
(function() {

angular.module("appControllers")
    .controller("locationCtrl", ["$scope", function ($scope) {

        $scope.lat = "0";
        $scope.lng = "0";
        $scope.accuracy = "0";
        $scope.error = "";
        $scope.model = { myMap: undefined };
        $scope.myMarkers = [];
        $scope.isLoading = false;

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
            $scope.model.myMap.setCenter(latlng);
            $scope.myMarkers.push(new google.maps.Marker({ map: $scope.model.myMap, position: latlng }));
        };

        $scope.showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred."
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

            }
        }
    }]);

}());