import React from 'react';
import Show from './Show'; 

function Main( {shows} ) {
    const showObj = shows.map((shows) => {
        return <Show 
            key={shows.id}
            id={shows.id}
            name={shows.name}
            image={shows.image.medium}
            genres={shows.genres}
            about={shows.summary}
        />
    })
    return (
        <ul>
            {showObj}
        </ul>
    );
}

export default Main;