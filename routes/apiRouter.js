// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("api/workouts/:id", (req, res) => {
        db.Exercises.create(req.body)
            .then(({ _id }) => db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: {exercises: _id } }, { new: true }))
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    app.get("api/workout/range", (res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    })
};