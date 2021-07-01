const express = require('express');
const router = express.Router();

const Movie = require('./Movie');

router.post('/apiMovie', async (request, response) => {
    const movie = new Movie({
        title: request.body.title,
        year: request.body.year,
        runTime: request.body.runTime,
        genre: request.body.genre,
        shortPlot: request.body.shortPlot,
        imageUrl: request.body.imageUrl

    });
    await movie.save();
    response.send(movie);
});



module.exports = router;