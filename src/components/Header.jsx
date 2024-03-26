import React from "react";

const Header = ({ searchValue, setSearchValue }) => {
    return (
        <div className="header">
            <h2>Movies</h2>
            <input className="search"
                placeholder="Поиск"
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        setSearchValue(event.target.value)
                    }
                }}
            />
        </div>
    )
}

export default Header;
