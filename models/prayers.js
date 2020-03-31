//=============
// DEPENDANCIES
//=============
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//=============
// MODEL SCHEMA
//=============

const prayerSchema = Schema({
  name: String,
  church: String,
  age: Number,
  gender: String,
  category: String,
  prayerRequest: String,
  timeSensitive: Boolean
  //add additional information below
})

const User = mongoose.model('User', userSchema);

module.exports = User;
