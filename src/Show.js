import React, { useState } from "react";

function Show( {id, name, image, genres, about} ) {
    const [addReview, setAddReview] = useState(true)
    return (
        <li>
           
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <p>{name}</p>
                <p>{genres}</p>
                <p>{about}</p>
            </div>
            <button input="textarea" onClick>
                Add Reviews
            </button>
        </li>
    )
}

export default Show;