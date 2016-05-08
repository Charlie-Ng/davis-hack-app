/**
 * Created by kitchiong on 5/7/16.
 */
(function() {

    angular.module('appControllers').controller('profileCtrl',
        ['$scope', '$facebook', 'userService', function($scope, $facebook, UserService) {

            $scope.welcomeMsg = "";


            $scope.userObj = {
                'name': '',
                'description': '',
                'facebookId': '',
                'gender': '',
                'picture': ''
            };

            $scope.isLoggedIn = false;

            $scope.isDisabled = false;

            $scope.reminderMsg1 = "";

            $scope.reminderMsg2 = "";

            $scope.login = function() {
                $facebook.login().then(function() {
                    refresh();
                });
            };
            function refresh() {
                $facebook.api("/me?fields=name, picture.height(961) ").then(
                    function(response) {

                        console.log(response);
                        var userId = response.id;

                        $scope.$parent.firstUser = response.name;

                        $scope.userObj.picture = response.picture.data.url;
                        $scope.isLoggedIn = true;

                        $scope.userObj.name = response.name;
                        $scope.userObj.facebookId = userId;

                        UserService.getUserData(userId, function(err, data) {

                            if(err) {

                                console.log("ERROR : getUserData");
                            }
                            else if(data) {

                                $scope.welcomeMsg = "Welcome Back " + response.name;
                                console.log(data);
                                $scope.userObj.description = data[0].description;
                                $scope.userObj.gender = data[0].gender;
                                $scope.isDisabled = true;
                            }
                            else if(data.length === 0) {

                                $scope.welcomeMsg = "Welcome " + response.name;
                                $scope.reminderMsg1 = "Looks like you are new here!";
                                $scope.reminderMsg2 = "Tell us more about yourself :)";
                                $scope.userObj.description = "";
                                $scope.userObj.gender = "";
                                $scope.isDisabled = false;
                            }
                        });
                    },
                    function(err) {

                        //$scope.welcomeMsg = "Please log in";
                    });
            }
            $scope.logout = function() {
                $facebook.logout().then(function() {
                    $scope.isLoggedIn = false;
                    refresh();
                });
            };

            $scope.createUser = function() {

                if($scope.userObj.gender && $scope.userObj.description) {

                    UserService.createUser($scope.userObj);
                    $scope.isDisabled = true;
                }
            };


            refresh();

        }]);
}());