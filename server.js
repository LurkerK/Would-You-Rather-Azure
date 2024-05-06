const express = require('express')
const path = require('path')

// import the routes in routes/index.js
const indexRouter = require('./routes/index')

// create the web application
const app = express()

const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

// make the routes in index.js available to the app
app.use('/', indexRouter)

// Start the server on the specified port or port 3000 if none
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})