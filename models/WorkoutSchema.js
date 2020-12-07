const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    name: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercises"
        }
    ],
});

const Workout = mongoose.model("Transaction", workoutSchema);

module.exports = Workout;