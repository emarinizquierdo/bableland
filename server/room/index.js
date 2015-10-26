var Room = require('./roomClass');
var room = new Room();

module.exports = function(socket) {
    socket.on("connection", function(client) {

        client.on('disconnect', function() {
            if (client && client.user && client.user._id) {
                room.removePerson(client.user._id, function() {
                    socket.emit('syncRoom', room.people);
                });
            }

            //remove user from db
        });

        client.on('joinRoom', function(user) {
            client.user = user;
            room.addPerson(user, function() {
                socket.emit('syncRoom', room.people);
            });
        })
    });

}
