/**
 * Created by kitchiong on 5/8/16.
 */
(function() {

    angular.module('appControllers').controller('firstCtrl',
        ['$scope', '$facebook', 'userService', function($scope, $facebook, UserService) {

            $scope.counter = [];
            $scope.disabled = false;


            $scope.dataObj = [
                {
                    'name' : 'Charlie',
                    'interest' : 'Gonna make Japanese food',
                    'phone' : '214-213-2429',
                    'location' : 'Davis, CA'
                },
                {
                    'name' : 'Donald Jump',
                    'interest' : 'Gonna make Mexican food',
                      'phone' : '123-456-0000',
                    'location' : 'Sacramento, CA'
                },
                {
                    'name' : 'Bernini Sandlers',
                'interest' : 'Gonna make sandwiches',
                'phone' : '508-123-2016',
                'location' : 'Sacramento, CA'
                 },
                {
                    'name' : 'Justin Fever',
            'interest' : 'Gonna make fried rice',
                'phone' : '202-414-3455',
            'location' : 'Davis, CA'
        },
            {
                'name' : 'Serina Gomaze',
                'interest' : 'Gonna make sushi',
                'phone' : '289-385-4545',
                'location' : 'Davis, CA'
            },{
                    'name' :'Wendy',
            'interest' : 'Gonna make Sushi',
                'phone' : '408-356-7557',
            'location' : 'Davis, CA'
        },
            {
                'name' : 'Vivi',
                'interest' : 'Gonna make Ramen',
                'phone' : '940-888-1584',
                'location' : 'Davis, CA'
            },                {
                    'name' :'Amber',
            'interest' : 'Gonna make Sandwich',
                'phone' : '530-666-7777',
            'location' : 'Davis, CA'
        },
            {
                'name' : 'Jacob',
                'interest' : 'Gonna make Turkey Burger',
                'phone' : '260-888-1582',
                'location' : 'Davis, CA'
            },                {
                    'name' : 'Adrey',
            'interest' : 'Gonna make Pasta',
                'phone' : '626-213-2429',
            'location' : 'Sacramento, CA'
        },
            {
                'name' : 'Winnie',
                'interest' : 'Gonna make Curry House',
                'phone' : '650-772-1000',
                'location' : 'Davis, CA'
            }
                ];


            $scope.toggle= function(user) {

                $scope.counter.push(user.name);

                if($scope.counter.length > 5) {
                    $scope.disabled = true;
                }else {
                    $scope.disabled = false;
                }
            }

        }]);
}());