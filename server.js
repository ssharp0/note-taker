// require express and path to set up routes to build the server
const express = require('express')
const { join } = require('path')

// set express to app to use
const app = express()

// middleware to serve up front end
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// require the routes
app.use(require('./routes'))

// server port - set up for port in Heroku or local host 3000
app.listen(process.env.PORT || 3000)

