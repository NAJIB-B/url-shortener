const crypto = require("crypto");

const Url = require("../models/urlModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.generateShortUrl = async () => {
  let isUnique = false;
  let shortUrl;

  while (!isUnique) {
    shortUrl = crypto.randomBytes(4).toString("hex");

    const uniqueUrl = await Url.findOne({ shortUrl });

    if (!uniqueUrl) {
      isUnique = true;
    }
  }
  return shortUrl;
};

exports.shortenUrl = catchAsync(async (req, res, next) => {
  if (!req.body.url) {
    return next(new AppError("Please provide a url", 400));
  }
  const url = req.body.url;

  const shortUrl = await generateShortUrl();

  const body = {
    url,
    shortUrl,
  };

  const result = await Url.create(body);
  const fullUrl = `${req.protocol}://${req.get('host')}/shorten/${shortUrl}`

  res.status(200).json({
    message: 'success',
    shortUrl: fullUrl
  })
});

exports.getUrl = catchAsync(async (req, res, next) => {
  const { shortUrl } = req.params;

  const urlDoc = await Url.findOne({ shortUrl });

  if (!urlDoc) {
    return next(new AppError("No url found with this code.", 404));
  }

  await Url.findOneAndUpdate(
    { shortUrl },
    { $inc: { accessCount: 1 } },
    { new: true },
  );

  const url = urlDoc.url;
  res.redirect(url);
});

exports.showStats = catchAsync(async (req, res, next) => {
  const { shortUrl } = req.params;

  const urlDoc = await Url.findOne({ shortUrl });

  if (!urlDoc) {
    return next(new AppError("No url found with this code.", 404));
  }

  res.status(200).json({
    message: "success",
    urlDoc,
  });
});

exports.updateUrl = catchAsync(async (req, res, next) => {
  const { shortUrl } = req.params;

  const urlDoc = await Url.findOne({ shortUrl });

  if (!urlDoc) {
    return next(new AppError("No url found with this code.", 404));
  }

  if (!req.body.url) {
    return next(new AppError("Please provide a url", 400));
  }

  const newUrl = req.body.url;

  const updatedUrlDoc = await Url.findOneAndUpdate(
    { shortUrl },
    { url: newUrl },
    { new: true },
  );
  res.status(201).json({
    message: "success",
    updatedUrlDoc,
  });
});

exports.deleteUrl = catchAsync(async (req, res, next) => {
  const { shortUrl } = req.params;

  const urlDoc = await Url.findOne({ shortUrl });

  if (!urlDoc) {
    return next(new AppError("No url found with this code.", 404));
  }

  await Url.findOneAndDelete({ shortUrl });
  res.status(204).json({
    message: "success",
  });
});
