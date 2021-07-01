// npm init -y
// npm express mongoose

//express server
const express = require('express');
const PORT = 5000;

//mongodb
const mongoose = require('mongoose');

//get routes
const routes = require('./Routes');

//Connect to MongoDB database
mongoose.connect("mongodb://localhost/movies", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use(routes);

        app.listen(PORT, () => {
            console.log(`App running at: ${PORT}`);
        });

    });
