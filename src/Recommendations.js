import React, { useState } from 'react';

function Recommendations() { 
    const [drama, setDrama] = useState("unchecked")
    const [comedy, setComedy] = useState("unchecked")
    const [action, setAction] = useState("unchecked")
    const [fantasy, setFantasy] = useState("unchecked")

    return (
        <div>
            <form>
                <h2>Let's Find You a New Show!</h2>
                <h3>What are some genres you like?</h3>
                <label for="drama">Drama</label>
                <input type="checkbox" name="drama" value={drama} />
                <label for="comedy">Comedy</label>
                <input type="checkbox" name="comedy" value={comedy} />
                <label for="action">Action</label>
                <input type="checkbox" name="action" value={action} />
                <label for="fantasy">Fantasy</label>
                <input type="checkbox" name="fantasy" value={fantasy} />
                <button type="submit">Get Shows!</button>
            </form>
        </div>
    )
}

export default Recommendations;
