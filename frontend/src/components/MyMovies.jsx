import { useState, useEffect } from "react";
import axios from 'axios';

const MyMovies = () => {
    const URL = "http://localhost:5000/movie";
    const ID = "alksdhlsdg";
    const byIdURL = `http://localhost:5000/movie/${ID}`;


    const [moviesList, setMoviesList] = useState([]);
    const [err, setErr] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const getData = (url) => {
        axios.get(url)
            .then(res => {
                setLoaded(true);
                setMoviesList(res.data);
            }).catch(err => {
                setLoaded(true)
                setErr(err);
            })
    }


    useEffect(() => {
        getData(URL);
    }, [moviesList])

    return (
        <>
            <h3>My Movies</h3>
            <>
                {err ? <p>Oops, something wrong!</p>
                    : !loaded ? <p>Please wait</p>
                        : <div>
                            {moviesList.map(movie => (
                                <div className="card">
                                    <img src={movie.imageUrl} alt="movie poster" />
                                    <h4>{movie.title}</h4>
                                    <p>{movie.year}</p>
                                    <p>{movie.genre}</p>
                                    <p>{movie.runTime}</p>
                                    <p>{movie.shortPlot}</p>
                                </div>
                            ))}
                        </div>
                }
            </>

            {/* <Movie movies={moviesList} /> */}
        </>
    );
}

export default MyMovies;