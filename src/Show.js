import React, { useState } from "react";

function Show( { id, title, image, about, streaming, likes, inList, updateList, onUpdateLikes } ) {
    const[showAbout, setShowAbout]= useState(false)
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

    function handleLikeClick() {
        const updateLikes = {
            likes: likes += 1,
        }
        fetch(`http://localhost:3000/shows/${id}`, 
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateLikes)
        })
        .then((res) => res.json())
        .then(onUpdateLikes);
    }

    return (
        <li className="card">
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
                <p className="showDescription">{likes} likes</p>
                <button onClick={handleLikeClick} className="likebutton">Like {"<3"}</button>
                <button onClick={toggleList} className="listButton">
                    {list === true? "Remove from list" : "Add to list"}
                </button>
            </div>
        </li>
    )
}

export default Show;