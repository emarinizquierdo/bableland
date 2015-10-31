'use strict';

angular.module('bablelandApp')
    .controller('NavbarCtrl', function($scope, $location, $mdSidenav, Auth) {

        /*
            Private Variables
         */

        /*
            Public Variables
         */
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        /*
            Public Methods
         */
        $scope.logout = logout;
        $scope.toggleSidebar = toggleSidebar;

        /*
            Private Methods
         */
        function logout() {
            Auth.logout();
            $location.path('/login');
        }

        function toggleSidebar() {
            $mdSidenav("left")
                .toggle()
        }

    });
