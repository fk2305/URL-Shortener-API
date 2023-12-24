// Middleware to check if the user is authenticated
module.exports.isLoggedIn= async(req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ error: 'Unauthorized. Please log in.' });
  }


