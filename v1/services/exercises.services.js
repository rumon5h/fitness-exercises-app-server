const Exercises = require('../models/Exercises');

exports.getAllExerciseService = async () => {
    const data = await Exercises.find({});

    return data;
}