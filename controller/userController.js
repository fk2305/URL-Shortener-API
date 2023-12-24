const User=require('../models/user');
const bcrypt = require('bcryptjs');


module.exports.register= async(req, res) => {
  try {
    const { username, password } = req.body;

    
    // Check if the user already exists
    const existingUser = await User.findOne({ username :  req.body.username });

    if (existingUser) {
      return res.json({ error : "User already exists"});
    }

    const newUser =  User.create({ username, password: bcrypt.hashSync(password, 10) });
  
    return res.status(200).json({
      success: true,
      message:" User Registered Successfully."
      
  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports.login = async (req, res) => {
  res.status(200).json({ message: 'Login successful.'});
}

module.exports.logout=async (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.status(200).json({ message: 'Logout successful.' });
  });
}