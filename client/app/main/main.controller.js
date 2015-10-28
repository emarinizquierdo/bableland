'use strict';

angular.module('bablelandApp')
    .controller('MainCtrl', function($scope, $http, socket, Auth) {

        $scope.socket = socket;

        var user = Auth.getCurrentUser();

        socket.onSynchRoom(function(data) {
            console.log('user joined in main');
        });

        socket.joinToRoom(user);

        $scope.$watch('socket.users', function(p_new, p_old) {
            if (p_new != p_old) {
                buildGridModel($scope.socket.users);
            }
        });

        function buildGridModel(people) {
            if (!people) return;
            for (var j = 0; j < people.length; j++) {
                people[j].span = {
                    row: 1,
                    col: 1
                };
                switch (j + 1) {
                    case 1:
                        people[j].background = "red";
                        people[j].span.row = people[j].span.col = 2;
                        break;
                    case 2:
                        people[j].background = "green";
                        break;
                    case 3:
                        people[j].background = "darkBlue";
                        break;
                    case 4:
                        people[j].background = "blue";
                        people[j].span.col = 2;
                        break;
                    case 5:
                        people[j].background = "yellow";
                        people[j].span.row = people[j].span.col = 2;
                        break;
                    case 6:
                        people[j].background = "pink";
                        break;
                    case 7:
                        people[j].background = "darkBlue";
                        break;
                    case 8:
                        people[j].background = "purple";
                        break;
                    case 9:
                        people[j].background = "deepBlue";
                        break;
                    case 10:
                        people[j].background = "lightPurple";
                        break;
                    case 11:
                        people[j].background = "yellow";
                        break;
                }
            }
        }
    });
