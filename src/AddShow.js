import React, { useState } from 'react';

function AddShow( {handleAddShow} ) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [genres, setGenres] = useState("");
    const [streaming, setStreaming] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/shows", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
             body: JSON.stringify({
                title: title,
                image: image,
                genres: genres,
                streaming: streaming
             })
        })
        .then((r) => r.json())
        .then((newShow) => handleAddShow(newShow))
    }

    return (
        <div>
            <h1>Don't see a show?</h1>
            <h2>Add it below!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>What's the show's name?</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Show name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='image'>Image URL</label>
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor='genres'>Genre</label>
                <input
                    type="text"
                    name="genres"
                    placeholder="Action, drama, comedy, etc"
                    value={genres}
                    onChange={(e) => setGenres(e.target.value)}
                />
                <label htmlFor='streaming'>Where can you watch it?</label>
                <input 
                    type="text"
                    name="streaming"
                    placeholder="Streaming"
                    value={streaming}
                    onChange={(e) => setStreaming(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddShow;