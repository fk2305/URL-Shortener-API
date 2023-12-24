const express = require('express');
const router = express.Router();
const shortenController = require('../controller/shortenController');
const middleware=require('../config/middleware')



// Shorten a URL
router.post('/shorten', middleware.isLoggedIn,shortenController.shortenUrl);

// Redirect to the original URL
router.get('/:shortUrl', middleware.isLoggedIn,shortenController.redirectToOriginal);

module.exports = router;
