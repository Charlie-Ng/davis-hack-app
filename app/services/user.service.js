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

            var obj = function (value) {
                this.value = value;
            };

            UserService.createUserListing = function(listingObj ,queryString) {

                //var newListingObj = {};

                var latitude = listingObj.latitude;
                var longtitude = listingObj.longtitude;
                var location = listingObj.myLocation;
                var food = listingObj.food;
                var user = listingObj.user;
                var appTime = listingObj.myTime;
                var calories = listingObj.calories;
                var fat = listingObj.fat;
                var carbon = listingObj.carbon;
                var protein = listingObj.protein;
                var appDate = listingObj.date;
                var phone = listingObj.myPhone;
                //var phone = temp3.value;

                //newListingObj.phone = phone;
                //
                //console.log(listingObj.phone);
                //
                //console.log(listingObj);

                //var queryString = "?latitude=" + latitude + "&longtitude=" + longtitude + "&location=" + location + "&food="
                //    + food + "&user=" + user + "&appTime=" + listingObj.myTime + "&calories=" + calories + "&fat="
                //    + fat + "&carbon=" + carbon + "&protein=" + protein + "&appDate=" + appDate + "&phoneNumber=" + phone;

                //console.log(JSON.stringify(queryString));

                $http({

                    "method" : "GET",
                    "url" : "http://shawnxiang.com/lunchbox/postListing.php" + queryString

                }).success(function(data, status, headers, config) {

                        console.log("created!");

                    }
                ).error(function(data, status, headers, config) {

                    console.log("hi error");
                })

            };

            return UserService;

        }]);
}());