/**
 * Created by kitchiong on 5/7/16.
 */

(function() {

    angular.module('ourApp', ['appControllers', 'ngRoute', 'ngMaterial'])
        .config(['$routeProvider', function($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'templates/intro/intro.html'
                })
                .when('/intro', {
                    templateUrl: 'templates/intro/intro.html'
                })
                .when('/item1', {
                    templateUrl: 'templates/item1/item1.html'
                })

        }]);
}());