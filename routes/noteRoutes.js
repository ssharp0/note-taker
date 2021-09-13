// router using express package
const router = require('express').Router()

// require notes from database folder
let { notes } = require('../db')

// get route to return notes data
router.get('/notes', (req, res) => {
 res.json(notes)
})

// post route to place notes data into array
router.post('/notes', (req, res) => {
 // push the request body to notes and send status for success (ok)
 notes.push(req.body)
 res.sendStatus(200)
})

// put route to update the notes (to update a certain note)
router.put('/notes/:noteTitle', (req, res) => {
 // set noteTitle to the request parameters noteTitle
 const noteTitle = req.params.noteTitle
 // check to determine if note text matches what was provided to grab specific note
 notes.forEach(note => {
  if (note.noteTitle === noteTitle) {
   note.isMarked = !note.isMarked
  }
 })
 // send status for success (ok)
 res.sendStatus(200)
})


// delete route to delete item that was removed from front end
router.delete('/notes/:noteTitle', (req, res) => {
 // set noteTitle to the request parameters noteTitle
 const noteTitle = req.params.noteTitle
 // filter notes for all that does not equal the noteTitle that is deleted
 notes = notes.filter(note => note.noteTitle !== noteTitle)
 // response send status for success (ok)
 res.sendStatus(200)
})

module.exports = router

