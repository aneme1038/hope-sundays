//==============
// DEPENDANCIES
//==============
const express = require('express');
const users = require express.Router();
const bcrypt = require('bcrypt');

//=========
// ROUTES
//=========

//GET Route
users.get('/new', (req, res) => {
  res.render('users/new.ejs')
})
//POST Route
users.post('/', (req, res) => {

})

//export file
module.exports = users;
