import React from 'react';
import Show from './Show'; 

function Main( {shows} ) {
    const showObj = shows.map((shows) => {
        return ( <Show 
            key={shows.id}
            id={shows.id}
            title={shows.title}
            image={shows.image}
            genres={shows.genres}
            about={shows.summary}
            streaming={shows.streaming}
        />
        )
    })
    // const splicedShows = showObj.splice(0, 6);

    return (
        <div>
            <div>
                <h2>Recommended For You</h2>
                <ul>
                    <li>Placeholder</li>
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