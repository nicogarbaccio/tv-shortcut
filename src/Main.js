import React from 'react';
import Show from './Show'; 

function Main( {shows, updateList} ) {
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
            inList={show.inList}
            updateList={updateList}
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
            inList={show.inList}
            updateList={updateList}
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
            inList={show.inList}
            updateList={updateList}
         /> 
        )
        }
    })

    const actionObj = shows.map((show) => {
        if (show.genres === "Action") { return ( 
        <Show
            key={show.id}
            id={show.id}
            title={show.title}
            image={show.image}
            genres={show.genres}
            about={show.summary}
            streaming={show.streaming}
            inList={show.inList}
            updateList={updateList}
         /> 
        )
        }
    })

    const realityObj = shows.map((show) => {
        if (show.genres === "Reality") { return ( 
        <Show
            key={show.id}
            id={show.id}
            title={show.title}
            image={show.image}
            genres={show.genres}
            about={show.summary}
            streaming={show.streaming}
            inList={show.inList}
            updateList={updateList}
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
                <h2>What's Hot in Action</h2>
                    <ul>
                        {actionObj}
                    </ul>
            </div>
            <div>
                <h2>What's Hot in Fantasy</h2>
                    <ul>
                        {fantasyObj}
                    </ul>
            </div>
            <div>
                <h2>What's Hot in Reality</h2>
                    <ul>
                        {realityObj}
                    </ul>
            </div>
            <div>
                <h2>Browse All Shows</h2>
                    <ul>
                        Show all shows here    
                    </ul>
            </div>
        </div>
    );
}

export default Main;