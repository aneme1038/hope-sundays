//==============
// DEPENDANCIES
//==============
const express = require('express');
const sessions = require express.Router();
const bcrypt = require('bcrypt');

//=========
// ROUTES
//=========

//GET Route
sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})
//POST Route
sessions.post('/', (req, res) => {

})
//DELETE Route
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  })
})

//export file
module.exports = sessions;
