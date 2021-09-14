// require path and express (router)
const { join } = require('path')
const router = require('express').Router()

// router for notes.html
router.get('/notes', (req, res) => {
 res.sendFile(join(__dirname, '../public/notes.html'))
})

// router for index.html
router.get('/', (req, res) => {
 res.sendFile(join(__dirname, '../public/index.html'))
})

// router for anything else will default to index.html
router.get('*', (req, res) => {
 res.sendFile(join(__dirname, '../public/index.html'))
})

// export the router
module.exports = router