import React from 'react';
import Show from './Show'; 

function Main( {shows} ) {
    const showObj = shows.map((show) => {
        return ( <Show 
            key={show.id}
            id={show.id}
            title={show.title}
            image={show.image}
            genres={show.genres}
            about={show.summary}
            streaming={show.streaming}
        />
        )
    })
    // const splicedShows = showObj.splice(0, 6);

    return (
        <div>
            <div>
                <h2>What's Hot in Drama</h2>
                <ul>
                    {showObj}
                </ul>
            </div>
            <div>
                <h2>What's Hot</h2>
                <ul>
                    {showObj}
                </ul>
            </div>
        </div>
    );
}

export default Main;