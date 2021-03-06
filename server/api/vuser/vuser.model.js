'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VuserSchema = new Schema({
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

module.exports = mongoose.model('Vuser', VuserSchema);
