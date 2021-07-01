import MovieFinderForm from './MovieFinderForm';
import MovieCard from './MovieCard.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';


const MovieFinderPage = () => {

    const [found, setFound] = useState({});

    const findMovie = (details) => {
        // Movie Searching Method Here
        const [title, year] = details;

        if (year !== 0) {
            axios.get(`http://www.omdbapi.com/?apikey=d02365b7&t=${title}&y=${year}`)
                .then((response) => {
                    console.log(response);
                    setFound(response);
                });
        } else {
            axios.get(`http://www.omdbapi.com/?apikey=d02365b7&t=${title}}`)
                .then((response) => {
                    console.log(response);
                    setFound(response);
                });
        }

    }

    useEffect(() => {

    }, [found]);

    return (
        <>
            <MovieFinderForm findMovieProp={findMovie} />
            <MovieCard foundProp={found} />
        </>
    )
}

export default MovieFinderPage;