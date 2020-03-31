//=============
// DEPENDANCIES
//=============
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Prayer = require('../models/prayers.js');
const User = require('../models/users.js');

//=============
// MODEL SCHEMA
//=============

const churchSchema = Schema({
  username: String,
  password: String,
  //add additional information below
  church: String,
  prayerTeam: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  prayerRequests: [{ type: Schema.Types.ObjectId, ref: 'Prayer'}]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
