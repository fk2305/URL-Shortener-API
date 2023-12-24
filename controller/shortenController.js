const ShortUrl = require('../models/shortUrl');

// Function to shorten a URL
const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    // Check if the original URL already exists
    const existingUrl = await ShortUrl.findOne({ originalUrl });

    if (existingUrl) {
      return res.json({ originalUrl, shortUrl: existingUrl.shortId });
    }

    // Create a new short URL
    const newShortUrl = new ShortUrl({ originalUrl });

    // Save the new short URL to the database
    await newShortUrl.save();

    res.json({ originalUrl, shortUrl: newShortUrl.shortId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to redirect to the original URL
const redirectToOriginal = async (req, res) => {
  try {
    const { shortUrl } = req.params;
   

    // Find the original URL in the database
    const urlMapping = await ShortUrl.findOne({ shortId : shortUrl });
   
    if (!urlMapping) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    // Check if the short URL has expired
    if (urlMapping.expiresAt < new Date()) {
      return res.status(410).json({ error: 'Short URL has expired' });
    }

    // Redirect to the original URL
    res.redirect(urlMapping.originalUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { shortenUrl, redirectToOriginal };
