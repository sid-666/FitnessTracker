const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

const Exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = Exercises;