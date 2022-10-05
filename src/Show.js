import React, { useState } from "react";

function Show( { id, title, image, about, streaming, inList, updateList } ) {
    const[showSummary, setShowSummary]= useState(true)
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
                <img src={image} alt={title} onClick ={()=> setShowSummary(prev =>!prev)}/>
            </div>
            <div>
                <h3><b>{title}</b></h3>
                <p>{about}</p>
                <p>Watch it on: {streaming}</p>
            </div>
            <div>
                <button onClick={toggleList}>
                    {list === true? "Remove from list" : "Add to list"}
                </button>
            </div>
        </li>
    )
}

export default Show;