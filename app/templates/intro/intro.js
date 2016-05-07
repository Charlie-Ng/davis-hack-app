/**
 * Created by kitchiong on 5/7/16.
 */
(function() {

    angular.module('appControllers').controller('introCtrl',
        ['$scope', '$facebook', function($scope, $facebook) {

            $scope.isLoggedIn = false;
            $scope.login = function() {
                $facebook.login().then(function() {
                    refresh();
                });
            };
            function refresh() {
                $facebook.api("/me?fields=name,id,picture.height(961) ").then(
                    function(response) {
                        $scope.welcomeMsg = "Welcome " + response.name;
                        console.log(response);
                        $scope.picture = response.picture.data.url;
                        $scope.isLoggedIn = true;
                    },
                    function(err) {
                        $scope.welcomeMsg = "Please log in";
                    });
            }
            $scope.logout = function() {
                $facebook.logout().then(function() {
                    $scope.isLoggedIn = false;
                    refresh();
                });
            };

            refresh();
        }]);
}());