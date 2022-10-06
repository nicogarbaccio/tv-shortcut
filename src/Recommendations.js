import React, { useState, useEffect } from 'react';
import Show from './Show';

function Recommendations( {shows, updateList} ) { 
    const [preferences, setPreferences] = useState([])
    const [recArray, setRecArray] = useState([])
    const [randObject, setRandObject] = useState([])
    const [drama, setDrama] = useState(false)
    const [comedy, setComedy] = useState(false)
    const [action, setAction] = useState(false)
    const [fantasy, setFantasy] = useState(false)

    function testArray(preferences) {
        let newArray = []; 
        for (let i = 0; i < shows.length; i++) { 
            if (preferences.drama === true && shows[i].genres === "Drama") {
                newArray.push(shows[i])
            } else if (preferences.comedy === true && shows[i].genres === "Comedy") {
                newArray.push(shows[i])
            } else if (preferences.action === true && shows[i].genres === "Action") { 
                newArray.push(shows[i])
            } else if (preferences.fantasy === true && shows[i].genres === "Fantasy") {
                newArray.push(shows[i])
            }
        }
        setRecArray(newArray)
    }
    
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
        .then((data) => testArray(data))
    }

    useEffect(() => {
        fetch("http://localhost:3000/recommendations")
        .then((r) => r.json())
        .then(data => setPreferences(data))
      }, []);

      function getRandomItem(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
        // get random item
        const item = arr[randomIndex];
        return [item];
    }
    const results = getRandomItem(recArray);
    // useEffect(() => {
    //     const result = getRandomItem(recArray);
    //     setRandObject(result);
    // }, [])

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
                    {results[0] === undefined ? null : (
                        <div className="container">
                            <Show
                                key={results[0].id}
                                id={results[0].id}
                                title={results[0].title}
                                image={results[0].image}
                                about={results[0].summary}
                                streaming={results[0].streaming}
                                inList={results[0].inList}
                                likes={results[0].likes}
                                updateList={updateList}
                            />
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Recommendations;
