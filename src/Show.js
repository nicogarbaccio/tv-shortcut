import React from "react";

function Show( {id, name, image, genres, about} ) {
    return (
        <li>
            <button>
                Add Reviews
            </button>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <p>{name}</p>
                <p>{genres}</p>
                <p>{about}</p>
            </div>
        </li>
    )
}

export default Show;