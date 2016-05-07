/**
 * Created by kitchiong on 5/7/16.
 */

(function() {

    'use strict';

    angular.module('appControllers', []);

    angular.module('appControllers').controller('appCtrl',
        ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

            $scope.toggleNav = function() {

                $mdSidenav('left').toggle();
            };

            $scope.menuOptions = [

                { name: "intro"},
                { name: "item1"},
                { name: "item2"},
                { name: "item3"}
            ];

            $scope.closeNav = function() {

                $mdSidenav('left').close();
            };



        }]);
}());