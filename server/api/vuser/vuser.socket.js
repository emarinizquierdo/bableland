/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Vuser = require('./vuser.model');

exports.register = function(socket) {
  Vuser.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Vuser.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('vuser:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('vuser:remove', doc);
}