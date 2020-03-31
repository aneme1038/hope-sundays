//=============
// DEPENDANCIES
//=============
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/users.js');
const Church = require('../models/church.js');

//=============
// MODEL SCHEMA
//=============

const prayerSchema = Schema({
  author: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  church: [{ type: Schema.Types.ObjectId, ref: 'Church'}],
  category: String,
  prayerRequest: String,
  timeSensitive: Boolean,
  status: String,
  pending: Boolean,
  inProgress: Boolean,
  completed: Boolean
  //add additional information below
})

const Prayer = mongoose.model('Prayer', prayerSchema);

module.exports = Prayer;
