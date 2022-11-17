const express = require('express');
const User = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const note = await User.getAllNotes();
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/note', async (req, res) => {
    try {
      let user = await User.note(req.body);
      res.send({...user, UserId : undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
