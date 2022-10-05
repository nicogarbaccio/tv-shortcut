import React from 'react';
import Show from './Show';

function YourList( { shows, updateList } ) {
    const listedShows = shows.filter((show) => {
        return show.inList === true;
    })
    const listObj = listedShows.map((show) => {
        return (
            <Show 
                key={show.id}
                id={show.id}
                title={show.title}
                image={show.image}
                about={show.summary}
                streaming={show.streaming}
                inList={show.inList}
                updateList={updateList}
            />
        )
    })
    return (
        <div>
            <h1>Your List</h1>
            <ul>
                {listObj}
            </ul>
        </div>
    )
}

export default YourList;
