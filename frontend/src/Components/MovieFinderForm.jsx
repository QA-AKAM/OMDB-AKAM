import { useState } from "react";

const MovieFinderForm = ({ findMovieProp }) => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        findMovieProp({ title, year });
    }

    return (
        <form>
            <label> Movie Title </label>
            <input type='text' id='title' onChange={(event) => {
                return setTitle(event.target.value);
            }}></input>
            <label> Movie Release Year </label>
            <input type='number' id='year' onChange={(event) => {
                return setYear(event.target.value);
            }}></input>
            <button type='submit' onClick={submitHandler}> Search </button>
        </form>
    )
}

export default MovieFinderForm;
