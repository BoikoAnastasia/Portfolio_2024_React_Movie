import React from "react";

const SearchMovie = (props) => {
    return (
        <input className="search"
            placeholder="Поиск"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
        />
    )
}

export default SearchMovie;