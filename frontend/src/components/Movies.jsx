'use strict';

import { useParams } from 'react-router-dom';

const Movies = () => {

    const { id } = useParams();

    return (
        <div>
            <h3> Movie id: {id} </h3>
        </div>
    );
}

export default Movies;