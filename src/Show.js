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
            <div>
                <button>
                    Add Reviews
                </button>
            </div>
        </li>
    )
}

export default Show;