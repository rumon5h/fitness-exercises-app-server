const { getAllExerciseService } = require("../services/exercises.services");


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