//=============
// DEPENDANCIES
//=============
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Prayer = require('../models/prayers.js');

//=============
// MODEL SCHEMA
//=============

const userSchema = Schema({
  username: String,
  password: String,
  //add additional information below
  fullName: String,
  age: Number,
  gender: String,
  church: String,
  isOnPrayerTeam: Boolean,
  prayers: [{ type: Schema.Types.ObjectId, ref: 'Prayer'}]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
