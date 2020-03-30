//========================
//DEPENDANCIES
//========================
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const override = require('method-override');
const app = express();
const db = mongoose.connection;
require('dotenv').config();

//============
// PORT
//============
//Decide on which deployment port we will use. If heroku, than heroku's port.
//If something else, use that port.
const PORT = process.env.PORT || 3003;
//======================
// DATABASE CONNECTION
//======================

//MongoDB?
const MONGODB_URI = process.env.MONGODB_URI;

//Fix any deprecation warnings from mongoose potentially...
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

// Error / Sucess Alerts for Development
db.on('error', (err) => console.log(err.message + ' is MongoD not running?'));
db.on('connected', () => console.log('Mongo is Connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//===========
// MIDDLEWARE
//===========

//use public folder for static assets
app.use(express.static('public'));
//populates req.body with parsed info from forms - if there is no data...
//...it will return an empty object {}.
app.use(express.urlencoded({extended: false})); //doesn't allow nested objects in query strings
app.use(express.json()); //returns middleware that only parses JSON - may or may not need it depending on project.
app.use(methodOverride('_method'));//Allow POST, PUT, and DELETE from a form in html
//use session. ENV file only includes SECRET.
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

//===============
// ROUTES
//===============
//Get route for main index.html file (or index.ejs in this case)
app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
});
//GET Route for the logged in user
app.get('/app', (req, res) => {
  if (req.session.currentUser) {
    res.render('app/main.ejs');
  } else {
    res.redirect('/sessions/new');
  }
})
//=================
// CONTROLLERS
//=================
const userController = require('./controllers/users.js');
app.use('/users', userController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
//add more controllers below

//==================
// Main Listeners
//==================
app.listen(PORT, () => console.log('Listening on port:', PORT));
