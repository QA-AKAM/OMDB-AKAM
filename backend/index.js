const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(cors());

//mongodb
const mongoose = require('mongoose');

//get routes
const routes = require('./Routes');

//Connect to MongoDB database
mongoose.connect("mongodb://localhost/movies", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        app.use(express.json());
        app.use(routes);

        app.listen(PORT, () => {
            console.log(`App running at: ${PORT}`);
        });

    });
