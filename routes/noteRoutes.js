// router using express package
const router = require('express').Router()

// require notes (array) from database folder
let { notes } = require('../db')

// get route to return notes array data
router.get('/notes', (req, res) => {
 res.json(notes)
})

// post route to push new notes data into notes array in database
router.post('/notes', (req, res) => {
 // newNote will be set to the request body
 let newNote = req.body

 // set highest id to 0 so a unique id can be added to note during below
 let highestId = 0

 // for loop to loop through the notes array
 for (let i = 0; i < notes.length; i ++) {
  let singleNote = notes[i]

  // if the singleNote id is greater than the highest id
  if (parseInt(singleNote.noteId) > highestId) {
   // highestId will be the highest numbered id in notes array
   highestId = parseInt(singleNote.noteId)
  }
 }

 // adjusted ID will be highestId + 1 to make the ID unique
 adjId = highestId + 1

 // newNoteId set to the adjId (string)
 newNoteId = JSON.stringify(adjId)

 // assign newNote.id to newNoteId
 newNote.noteId = newNoteId

 // push the newNote to notes array in database and send status for success (ok)
 notes.push(newNote)
 res.sendStatus(200)
})

// delete route to delete item based on noteId
router.delete('/notes/:noteId', (req, res) => {
 // set noteId to the request parameters noteId provided
 const noteId = req.params.noteId
 // filter notes array to include everything but the object with a matching noteDd
 notes = notes.filter(note => note.noteId !== noteId)
 // response send status for success (ok)
 res.sendStatus(200)
})

// export router
module.exports = router

