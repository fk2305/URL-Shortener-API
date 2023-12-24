
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const shortUrlSchema = new mongoose.Schema({
  originalUrl: {
     type: String, 
     required: true
     },
  shortId: {
     type: String, 
    default: () => nanoid(8), 
    unique: true
     },
  createdAt: { 
    type: Date,
     default: Date.now
     },
  expiresAt: {
    type: Date,
    expires: '30d', // Short URL expires after 30 days
    default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

module.exports = ShortUrl;
