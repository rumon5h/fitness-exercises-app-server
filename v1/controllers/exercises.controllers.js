const { getAllExerciseService, createExerciseService } = require("../services/exercises.services");


exports.getAllExercise = async(req, res) => {
    try {
        const exercises = await getAllExerciseService();

        res.status(200).json({
            status : 'success',
            message : 'Successfully got all exercise!',
            data: exercises
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message
        });
    }
}

exports.createNewExercise = async(req, res) => {
    try {
        const data = req.body;
        const result = await createExerciseService(data);

        res.status(200).json({
            status : 'success',
            message : 'Successfully created new exercise!',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message
        });
    }
}