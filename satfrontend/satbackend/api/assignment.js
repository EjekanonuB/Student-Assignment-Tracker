const express = require('express');
const router = express.Router();
const assignmentData = require('../model/assignmentModel');

router.get('/', (req, res) => {
  assignmentData
    .find()
    .then(students => {
      res.json(students);
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/create', (req, res) => {
  const createdAssignment = new assignmentData({
    username: req.body.username,
    assignmentReport: req.body.assignmentReport,
    timeSubmited: req.body.timeSubmited,
  });
  createdAssignment
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

router.get('/:id', (req, res) => {
  assignmentData
    .findById(req.params.id)
    .then(assignment => {
      res.json(assignment);
    })
    .catch(error => {
      res.json(error);
    });
});

router.delete('/:id', (req, res) => {
  assignmentData
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.json('Student deleted');
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/:id', (req, res) => {
  assignmentData
    .findByIdAndUpdate(req.params.id)
    .then(() => {
      res.json('Assignment Updated');
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/update/:id', (req, res) => {
  assignmentData
    .findById(req.params.id)
    .then(assignment => {
      assignment.username = req.body.username;
      assignment.assignmentReport = req.body.assignmentReport;
      assignment.timeSubmitted = req.body.timeSubmitted;
      assignment.save().then(() => {
        res.json('Exercise Updated');
      });
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;
