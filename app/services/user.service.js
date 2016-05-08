/**
 * Created by kitchiong on 5/7/16.
 */
(function() {

    'use strict';

    angular.module('app.service').factory('userService',
        ['$http', function($http) {

            var UserService = {};

            UserService.getUserData = function(userId, callback) {

                console.log(userId);
                $http(
                    {
                        "method": "GET",
                        "url": "http://shawnxiang.com/lunchbox/getSpecificUser.php?id=" + userId
                    }
                ).success(function(data, status, headers, config) {

                    console.log("return");
                    console.log(data);
                    callback(false, data);
                 }
                ).error(function(data, status, headers, config) {

                    console.log("hi error");

                    callback(true, null);
                });
            };

            UserService.createUser = function(userObj) {

                var description = userObj.description;
                var user = userObj.name;
                var facebookId = userObj.facebookId;
                var gender = userObj.gender;

                var queryString = "?description="+ description+ "&gender=" +gender+ "&id=" + facebookId + "&user=" + user;

                $http(
                    {
                        "method": "GET",
                        "url": "http://shawnxiang.com/lunchbox/createUser.php" + queryString
                    }
                ).success(function(data, status, headers, config) {

                    console.log("created!");

                }
                ).error(function(data, status, headers, config) {

                    console.log("hi error");
                })
            };

            return UserService;

        }]);
}());