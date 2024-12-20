class AppError extends Error {
  constructor (message, statusCode) {
    super()
    this.message = message,
      this.statusCode = statusCode || 500,
      this.status = `${statusCode}`.startsWith(4) ? 'fail' : 'error'
  }
}

module.exports = AppError
