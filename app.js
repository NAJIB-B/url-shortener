const express = require("express")
const path = require("path")

const urlRouter = require("./routes/urlRoute")
const AppError = require("./utils/appError")


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.use(express.static(path.join(__dirname, "public")))


app.use("/shorten", urlRouter)


app.all("*", (req, res, next) => {

  return next(new AppError('Not found. Please check the url and try again', 404))

})


app.use((err, req, res, next) => {

  res.status(err.statusCode).json({
    error: err.message,
    status: err.status,
    stack: err.stack
  })
})


module.exports = app
