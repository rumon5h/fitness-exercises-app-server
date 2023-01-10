const {
  getAllExerciseService,
  createExerciseService,
} = require("../services/exercises.services");

exports.getAllExercise = async (req, res) => {
  try {
    let filters = { ...req.query };
    const excludeField = ["sort", "page", "limit"];

    excludeField.forEach((field) => delete filters[field]);

    // gt, lt, gte, lte
    let filtersString = JSON.stringify(filters);
    filtersString = filtersString.replace(
      /\b(gt|lt|gte|lte)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filtersString);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    // Pagination
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const exercises = await getAllExerciseService(filters, queries);

    res.status(200).json({
      status: "success",
      message: "Successfully got all exercise!",
      data: exercises,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

exports.createNewExercise = async (req, res) => {
  try {
    const data = req.body;
    const result = await createExerciseService(data);

    res.status(200).json({
      status: "success",
      message: "Successfully created new exercise!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
