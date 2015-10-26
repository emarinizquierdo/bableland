'use strict';

angular.module('bablelandApp')
    .controller('MainCtrl', function($scope, $http, socket, Auth) {
        $scope.awesomeThings = [];
        $scope.rusers = [];
        $scope.socket = socket;

        var user = Auth.getCurrentUser();

        socket.onSynchRoom(function(data) {
            console.log('user joined in main');
        });

        socket.joinToRoom(user);

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $http.get('/api/rusers').success(function(rusers) {
            $scope.rusers = rusers;

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

        $scope.deleteThing = function(ruser) {
            $http.delete('/api/things/' + ruser._id);
        };

        $scope.addRuser = function() {
            if ($scope.newRuser === '') {
                return;
            }
            $http.post('/api/rusers', {
                name: $scope.newRuser
            });
            $scope.newRuser = '';
        };

        $scope.deleteRuser = function(ruser) {
            $http.delete('/api/rusers/' + ruser._id);
        };


        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('thing');
            socket.unsyncUpdates('ruser');
        });
    });
