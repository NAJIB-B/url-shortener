const express = require("express")

const {getOverview, showShortUrl} = require("../controllers/viewsController")


const router = express.Router()



router.get("/", getOverview)

router.post("/shorten", showShortUrl)


module.exports = router
