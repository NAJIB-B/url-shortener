const express = require("express")


const {getUrl, shortenUrl, updateUrl, deleteUrl} = require("../controllers/urlController")


const router = express.Router()


router.route("/").post(shortenUrl)


router.route("/:shortUrl").get(getUrl).patch(updateUrl).delete(deleteUrl)

router.route("/:shortUrl/stats")



module.exports = router
