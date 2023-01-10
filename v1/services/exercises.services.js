const Exercises = require('../models/Exercises');

exports.getAllExerciseService = async () => {
    const data = await Exercises.find({});
    const totalExercises = await Exercises.countDocuments({});

    return {totalExercises, data};
}

exports.createExerciseService = async (data) => {

    const result = await Exercises.create(data);

    return result;
}