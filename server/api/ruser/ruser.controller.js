'use strict';

var _ = require('lodash');
var Ruser = require('./ruser.model');

// Get list of rusers
exports.index = function(req, res) {
  Ruser.find(function (err, rusers) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(rusers);
  });
};

// Get a single ruser
exports.show = function(req, res) {
  Ruser.findById(req.params.id, function (err, ruser) {
    if(err) { return handleError(res, err); }
    if(!ruser) { return res.status(404).send('Not Found'); }
    return res.json(ruser);
  });
};

// Creates a new ruser in the DB.
exports.create = function(req, res) {
  Ruser.create(req.body, function(err, ruser) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(ruser);
  });
};

// Updates an existing ruser in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ruser.findById(req.params.id, function (err, ruser) {
    if (err) { return handleError(res, err); }
    if(!ruser) { return res.status(404).send('Not Found'); }
    var updated = _.merge(ruser, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(ruser);
    });
  });
};

// Deletes a ruser from the DB.
exports.destroy = function(req, res) {
  Ruser.findById(req.params.id, function (err, ruser) {
    if(err) { return handleError(res, err); }
    if(!ruser) { return res.status(404).send('Not Found'); }
    ruser.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}