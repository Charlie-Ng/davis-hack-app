/**
 * Created by kitchiong on 5/7/16.
 */

(function() {

    angular.module('appControllers').controller('makeCtrl',
        ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

            $scope.url = 'http://shawnxiang.com/lunchbox/nutritionData.php?input='; // The url of our search

            $scope.search = function() {

                q = $scope.keywords;
                // Create the http post request
                // the data holds the keywords
                // The request is a JSON request.
                $http.get($scope.url+q).
                    success(function(data, status) {
                        $scope.status = status;
                        $scope.data = data;
                        $scope.result = data; // Show result from server in our <pre></pre> element
                    })
                    .
                    error(function(data, status) {
                        console.log("failed");
                        $scope.data = data || "Request failed";
                        $scope.status = status;
                    });
            };

        }]);
}());