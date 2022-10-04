import React from 'react';
import Show from './Show'; 

function Main( {shows} ) {
    const dramaObj = shows.map((show) => {
        if (show.genres === "Drama") { return ( 
        <Show
            key={show.id}
            id={show.id}
            title={show.title}
            image={show.image}
            genres={show.genres}
            about={show.summary}
            streaming={show.streaming}
         /> 
        )
        }
    })

    const fantasyObj = shows.map((show) => {
        if (show.genres === "Fantasy") { return ( 
        <Show
            key={show.id}
            id={show.id}
            title={show.title}
            image={show.image}
            genres={show.genres}
            about={show.summary}
            streaming={show.streaming}
         /> 
        )
        }
    })

    const comedyObj = shows.map((show) => {
        if (show.genres === "Comedy") { return ( 
        <Show
            key={show.id}
            id={show.id}
            title={show.title}
            image={show.image}
            genres={show.genres}
            about={show.summary}
            streaming={show.streaming}
         /> 
        )
        }
    })
    // const splicedShows = showObj.splice(0, 6);

    return (
        <div>
            <div>
                <h2>What's Hot in Drama</h2>
                <ul>
                   {dramaObj}
                </ul>
            </div>
            <div>
                <h2>What's Hot in Comedy</h2>
                    <ul>
                        {comedyObj}
                    </ul>
            </div>
            <div>
                <h2>What's Hot in Fantasy</h2>
                    <ul>
                        {fantasyObj}
                    </ul>
            </div>
        </div>
    );
}

export default Main;