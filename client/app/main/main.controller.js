'use strict';

angular.module('bablelandApp')
    .controller('MainCtrl', function($scope, $http, socket) {
        $scope.awesomeThings = [];
        $scope.vusers = [];

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            socket.syncUpdates('thing', $scope.awesomeThings);
        });

        $http.get('/api/vusers').success(function(vusers) {
            $scope.vusers = vusers;
            socket.syncUpdates('vuser', $scope.vusers);
        });

        $scope.addThing = function() {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', {
                name: $scope.newThing
            });
            $scope.newThing = '';
        };

        $scope.deleteThing = function(vuser) {
            $http.delete('/api/things/' + vuser._id);
        };

        $scope.addVuser = function() {
            if ($scope.newVuser === '') {
                return;
            }
            $http.post('/api/vusers', {
                name: $scope.newVuser
            });
            $scope.newVuser = '';
        };

        $scope.deleteVuser = function(vuser) {
            $http.delete('/api/vusers/' + vuser._id);
        };


        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('thing');
            socket.unsyncUpdates('vuser');
        });
    });
