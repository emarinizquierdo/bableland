'use strict';

var _ = require('lodash');
var Vuser = require('./vuser.model');

// Get list of vusers
exports.index = function(req, res) {
  Vuser.find(function (err, vusers) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(vusers);
  });
};

// Get a single vuser
exports.show = function(req, res) {
  Vuser.findById(req.params.id, function (err, vuser) {
    if(err) { return handleError(res, err); }
    if(!vuser) { return res.status(404).send('Not Found'); }
    return res.json(vuser);
  });
};

// Creates a new vuser in the DB.
exports.create = function(req, res) {
  Vuser.create(req.body, function(err, vuser) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(vuser);
  });
};

// Updates an existing vuser in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Vuser.findById(req.params.id, function (err, vuser) {
    if (err) { return handleError(res, err); }
    if(!vuser) { return res.status(404).send('Not Found'); }
    var updated = _.merge(vuser, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(vuser);
    });
  });
};

// Deletes a vuser from the DB.
exports.destroy = function(req, res) {
  Vuser.findById(req.params.id, function (err, vuser) {
    if(err) { return handleError(res, err); }
    if(!vuser) { return res.status(404).send('Not Found'); }
    vuser.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}