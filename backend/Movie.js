const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    year: {
        type: Number,
        required: true,
        minlength: 4

    },
    runTime: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    shortPlot: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Movies", movieSchema);