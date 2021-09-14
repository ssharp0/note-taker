// require express for the router to collect all routing files
const router = require('express').Router()

// prefix item route with api
router.use('/api',require('./noteRoutes.js'))

// export out router
module.exports = router