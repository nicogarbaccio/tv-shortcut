import React, { useState, useEffect } from 'react';
import Show from './Show';

function Recommendations( {shows, updateList} ) { 
    const [preferences, setPreferences] = useState([])
    const [drama, setDrama] = useState(false)
    const [comedy, setComedy] = useState(false)
    const [action, setAction] = useState(false)
    const [fantasy, setFantasy] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/recommendations/`, 
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                drama: drama,
                comedy: comedy,
                action: action,
                fantasy: fantasy
            })
        })
        .then((res) => res.json())
    }

    useEffect(() => {
        fetch("http://localhost:3000/recommendations")
        .then((r) => r.json())
        .then(data => setPreferences(data))
      }, []);

    // const recShow = preferences.map((pref) => {
    //     if (pref.drama === true) {
    //         return (
    //         <Show
    //             key={show.id}
    //             id={show.id}
    //             title={show.title}
    //             image={show.image}
    //             genres={show.genres}
    //             about={show.summary}
    //             streaming={show.streaming}
    //             inList={show.inList}
    //             updateList={updateList}
    //      /> 
    //         )
    //     }
    // })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Let's Find You a New Show!</h2>
                <h3>What are some genres you like?</h3>
                <label for="drama">Drama</label>
                <input 
                    type="checkbox" 
                    name="drama" 
                    value={drama}
                    onChange={(e) => setDrama(e.target.checked)}
                    />
                <label for="comedy">Comedy</label>
                <input 
                    type="checkbox" 
                    name="comedy" 
                    value={comedy} 
                    onChange={(e) => setComedy(e.target.checked)}
                    />
                <label for="action">Action</label>
                <input 
                    type="checkbox" 
                    name="action" 
                    value={action} 
                    onChange={(e) => setAction(e.target.checked)}
                    />
                <label for="fantasy">Fantasy</label>
                <input 
                    type="checkbox" 
                    name="fantasy" 
                    value={fantasy}
                    onChange={(e) => setFantasy(e.target.checked)}
                    />
                <button type="submit">Get Shows!</button>
            </form>
            <div>
                <h2>Your Recommendations</h2>
                <ul>
                    Shows here
                </ul>
            </div>
        </div>
    )
}

export default Recommendations;
