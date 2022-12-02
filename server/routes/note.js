const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Note.getAllnotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/write_notes', async (req, res) => {
    try {
      let note = await Note.write_notes(req.body);
      res.send({...note, note_content})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports = router;

/*


const express = require('express');
const Notes = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Notes.getAllUsers();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  });

  .post('/write_notes', async (req, res) => {
    try {
      let note = await Notes.write_notes(req.body);
      res.send({...note, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  
module.exports = router;*/