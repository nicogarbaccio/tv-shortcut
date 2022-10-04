import React from 'react';

function SearchBar({setSearch}) {
    return (
        <div className="search">
            <input type="text"  className="searchWord" onChange={(e) =>setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchBar;
