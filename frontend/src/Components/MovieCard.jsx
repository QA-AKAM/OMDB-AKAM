import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ foundProp }) => {

    const [found, setFound] = useState({});

    useEffect(() => {
        setFound(foundProp.data);
    }, [foundProp])


    return (
        <Card>
            <h3> {found?.Title} </h3>
            <h4> Year Released: {found?.Year} </h4>
            <h5> Plot: {found?.Plot} </h5>
            <button> Add to My Movies </button>
        </Card>
    )
}

export default MovieCard;