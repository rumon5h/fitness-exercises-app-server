const express = require('express');
const router = express.Router();
const exercisesController = require('../controllers/exercises.controllers');

router.route('/').get(exercisesController.getAllExercise)

module.exports = router;