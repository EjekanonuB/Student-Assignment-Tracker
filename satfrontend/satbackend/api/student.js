const express = require('express');
const router = express.Router();
const studentData = require('../model/studentModel');

router.get('/', (req, res) => {
  studentData
    .find()
    .then(students => {
      res.json(students);
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/create', (req, res) => {
  const createdStudent = new studentData({
    username: req.body.username
  });
  createdStudent
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});
module.exports = router;
