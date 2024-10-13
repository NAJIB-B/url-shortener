const mongoose = require("mongoose")


const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'A url must contain a url'],
  },
  shortUrl: {
    type: String,
    required: [true, 'A url must have a short code'],
    unique: [true, 'The short code must be unique'],
    index: 1
  },
  accessCount: {
    type: Number,
    default: 0
  }
}, {timestamps: true})


const Url = mongoose.model('Url', urlSchema)


module.exports = Url
