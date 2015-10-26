'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RuserSchema = new Schema({
    name: String,
    nick: String,
    sex: String,
    age: Number,
    country: String,
    topics: [],
    contact: [],
    info: String,
    status: String,
    active: Boolean,
});

module.exports = mongoose.model('Ruser', RuserSchema);
