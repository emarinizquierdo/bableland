/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Ruser = require('./ruser.model');

exports.register = function(socket) {
  Ruser.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Ruser.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('ruser:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('ruser:remove', doc);
}