// require express (and router) and path to set up routes to build the server dependencies
const express = require('express')
const { join } = require('path')
const router = require('express').Router()

// require routes for the notes (API) and html - point server to route files
const notesRoutes = require('./routes/noteRoutes')
const htmlRoutes = require('./routes/htmlRoutes')


// set express to app for use
const app = express()

// middleware to serve up front end - sets up data parsing required for API calls
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// application use routes for notes (API) and html
app.use(require('./routes'))
app.use('/', htmlRoutes)
app.use('/api', notesRoutes)

// server port - set up for port in Heroku or local host 3000
app.listen(process.env.PORT || 3000)

