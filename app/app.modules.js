/**
 * Created by kitchiong on 5/7/16.
 */

(function() {

    angular.module('ourApp', ['appControllers', 'ngRoute', 'ngMaterial', 'ngFacebook'])
        .config(['$routeProvider', '$facebookProvider', function($routeProvider, $facebookProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'templates/intro/intro.html',
                    //controller: 'introCtrl'
                })
                .when('/profile', {
                    templateUrl: 'templates/profile/profile.html',
                    controller: 'profileCtrl'
                })
                .when('/make', {
                    templateUrl: 'templates/make/make.html',
                    //controller: 'makeCtrl'
                })
                .when('/history', {
                    templateUrl: 'templates/history/history.html',
                    //controller: ''
                });

            $facebookProvider.setAppId('1612301489091125');

        }])
        .run( function( $rootScope ) {
        // Load the facebook SDK asynchronously
        (function(){
            // If we've already installed the SDK, we're done
            if (document.getElementById('facebook-jssdk')) {return;}

            // Get the first script element, which we'll use to find the parent node
            var firstScriptElement = document.getElementsByTagName('script')[0];

            // Create a new script element and set its id
            var facebookJS = document.createElement('script');
            facebookJS.id = 'facebook-jssdk';

            // Set the new script's source to the source of the Facebook JS SDK
            facebookJS.src = '//connect.facebook.net/en_US/all.js';

            // Insert the Facebook JS SDK into the DOM
            firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
        }());
    });
}());