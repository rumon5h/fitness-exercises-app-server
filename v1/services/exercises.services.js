const Exercises = require("../models/Exercises");

exports.getAllExerciseService = async (filters, queries) => {
  const data = await Exercises.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const totalExercises = await Exercises.countDocuments(filters);
  const pageCount = Math.ceil(totalExercises / queries.limit);

  return { totalExercises,pageCount , data };
};

exports.createExerciseService = async (data) => {
  const result = await Exercises.create(data);

  return result;
};
