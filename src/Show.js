import React, { useState } from "react";

function Show( {id, title, image, genres, about} ) {
    return (
        <li>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h3><b>{title}</b></h3>
                <p>{genres}</p>
                <p>{about}</p>
            </div>
<<<<<<< HEAD
            <button input="textarea" onClick>
                Add Reviews
            </button>
=======
            <div>
                <button>
                    Add Reviews
                </button>
            </div>
>>>>>>> nico
        </li>
    )
}

export default Show;