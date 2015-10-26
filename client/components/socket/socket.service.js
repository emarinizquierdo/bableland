/* global io */
'use strict';

angular.module('bablelandApp')
    .service('socket', function($rootScope, socketFactory) {

        // socket.io now auto-configures its connection when we ommit a connection url
        var ioSocket = io('', {
            // Send auth token on connection, you will need to DI the Auth service above
            // 'query': 'token=' + Auth.getToken()
            path: '/socket.io-client'
        });

        var socket = socketFactory({
            ioSocket: ioSocket
        });

        this.socket = socket;
        this.users = [];
        this.joinToRoom = joinToRoom;
        this.onSynchRoom = onSynchRoom;

        function joinToRoom(me) {
            socket.emit("joinRoom", me);
        }

        function onSynchRoom(cb) {
            cb = cb || angular.noop;

            /**
             * Syncs item creation/updates on 'model:save'
             */
            socket.on('syncRoom', function(items) {

                if (!$rootScope.$$phase) {
                    this.users = items;
                    $rootScope.$apply();
                }

                cb(items);

            }.bind(this));

        }

    });
