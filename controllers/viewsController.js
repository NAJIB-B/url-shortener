const {generateShortUrl} = require("./urlController")
const Url = require("../models/urlModel")


exports.getOverview = async(req, res, next) => {

  res.render('overview')

}


exports.showShortUrl = async(req, res, next) => {
  const url = req.body.url;

  const shortUrl = await generateShortUrl();

  const body = {
    url,
    shortUrl,
  };

  const result = await Url.create(body);
  const fullUrl = `${req.protocol}://${req.get('host')}/shorten/${shortUrl}`

  res.render('shortUrl', {shortUrl: fullUrl})
}
