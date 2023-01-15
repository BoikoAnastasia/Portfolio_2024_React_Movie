import React from "react";
import style from '../components_style/style.css';
import SearchMovie from "./SearchMovie";


const Header = ({ searchValue, setSearchValue }) => {
    return (
        <div className="header">
            <h2>Movies</h2>
            <input className="search"
                placeholder="Поиск"
                onKeyDown={(event) => {
                    if (event.keyCode == 13) {
                        setSearchValue(event.target.value)
                    }
                }}
            />
        </div>
    )
}

export default Header;
