const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const shortenRoutes = require('./routes/shorten');
const db = require('./config/mongoose');
const { nanoid } = require('nanoid');
const port = 8000;


const app = express();


const passport = require('./config/passport');
const session = require('express-session');
app.use(express.json());
app.use(session({ secret: 'abc', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Use routes
app.use('/auth', authRoutes);
app.use('/', shortenRoutes);




// Run Server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
