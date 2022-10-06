import React, { useState } from "react";

function Show( { id, title, image, about, streaming, likes, inList, updateList } ) {
    const[showAbout, setShowAbout]= useState(true)
    const [list, setList] = useState(inList)
    function toggleList() {
        setList((prev) => !prev)
        const newObj = {inList: list === true ? false : true}
        fetch(`http://localhost:3000/shows/${id}`, 
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObj)
        })
        .then((res) => res.json())
        .then((data) => updateList(data))
    }
    return (
        <li>
            <div>
                <img src={image} alt={title} onClick ={()=> setShowAbout(prev =>!prev)}/>
                {showAbout ? about : null}
            </div>
            <div>
                <h3><b>{title}</b></h3>
                <p>{showAbout}</p>
                <p>Watch it on: {streaming}</p>
            </div>
            <div>
                <p>{likes} likes</p>
                <button>Like {"<3"}</button>
                <button onClick={toggleList}>
                    {list === true? "Remove from list" : "Add to list"}
                </button>
            </div>
        </li>
    )
}

export default Show;