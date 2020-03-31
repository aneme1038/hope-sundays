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
})

const User = mongoose.model('User', userSchema);

module.exports = User;
