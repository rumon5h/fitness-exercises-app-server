const mongoose = require('mongoose');

const exercisesSchema = mongoose.Schema({
    bodyPart:{
        type : String,
        required : true,
        enum: [
            "back",
            "cardio",
            "chest",
            "lower arms",
            "lower legs",
            "neck",
            "shoulders",
            "upper arms",
            "upper legs",
            "waist"
          ]
    },
    equipment: {
        type : String,
        required : true,
        enum: [
            "assisted",
            "band",
            "barbell",
            "body weight",
            "bosu ball",
            "cable",
            "dumbbell",
            "elliptical machine",
            "ez barbell",
            "hammer",
            "kettlebell",
            "leverage machine",
            "medicine ball",
            "olympic barbell",
            "resistance band",
            "roller",
            "rope",
            "skierg machine",
            "sled machine",
            "smith machine",
            "stability ball",
            "stationary bike",
            "stepmill machine",
            "tire",
            "trap bar",
            "upper body ergometer",
            "weighted",
            "wheel roller"
          ]
    },
    gifUrl:{
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true,
        trim: true,
        minLength: [3, 'Name must be at least 3 characters long!'],
        maxLength: [255, 'Name cannot be longer than 255 characters']
    },
    target:{
        type : String,
        required : true,
        enum: [
            "abductors",
            "abs",
            "adductors",
            "biceps",
            "calves",
            "cardiovascular system",
            "delts",
            "forearms",
            "glutes",
            "hamstrings",
            "lats",
            "levator scapulae",
            "pectorals",
            "quads",
            "serratus anterior",
            "spine",
            "traps",
            "triceps",
            "upper back"
          ]
    }

},{
    timestamps: true
});

const Exercises = mongoose.model('Exercises', exercisesSchema);

module.exports = Exercises;