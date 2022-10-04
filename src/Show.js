import React, { useState } from "react";

function Show( {id, title, image, genres, about, streaming} ) {
    return (
        <li>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h3><b>{title}</b></h3>
                <p>{about}</p>
                <p>Watch it on: {streaming}</p>
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