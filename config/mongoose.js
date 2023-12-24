const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const url = 'mongodb+srv://fk:hrxx8KXKbckrQXvm@cluster0.s3dclm0.mongodb.net/URL-Shortener';
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any error occuered
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   

//On Successfull connection to database
db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  