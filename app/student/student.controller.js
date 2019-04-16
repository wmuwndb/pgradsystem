const express = require('express');

/**
 * API for registration, inquiring, updating
 * and removal of students
 */
const studentController = express.Router();


studentController.get('/', (req, res) => {
  res.send('This returns all students');
});

studentController.get('/:id', (req, res) => {
  res.send('This returns the specified student\'s details');
})

studentController.post('/', (req, res) => {
  res.status(201).send('This creates a new student in database');
});

studentController.put('/:id', (req, res) => {
  res.send('This updates the given students details');
});

studentController.delete('/:id', (req, res) => {
  res.send('This deletes the given student');
});

