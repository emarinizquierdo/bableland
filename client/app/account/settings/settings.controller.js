'use strict';

angular.module('bablelandApp')
    .controller('SettingsCtrl', function($scope, User, Auth, countries, languages) {

        /*
            Private Variables
         */


        /*
            Public Variables
         */
        $scope.user;
        $scope.countries = countries;
        $scope.languages = languages;
        $scope.sexs = [{
            name: "Male"
        }, {
            name: "Female"
        }];

        /*
            Public Methods
         */
        $scope.updateMe = updateMe;


        /*
            Private Methods
         */
        function updateMe(user) {
            $scope.submitted = true;
            debugger;
            User.update(user, function(user) {
                $scope.user = user;
            }, function() {

            });
        }

        function getMe(user) {
            $scope.submitted = true;

            User.get(function(user) {
                $scope.user = user;
            }, function() {});
        }

        getMe();
    });
