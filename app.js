const express = require("express")
const path = require("path")

const urlRouter = require("./routes/urlRoute")
const viewRouter = require("./routes/viewsRoute")
const AppError = require("./utils/appError")


const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.use(express.static(path.join(__dirname, "public")))



app.use("/api/v1/shorten", urlRouter)
app.use("/", viewRouter)


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
