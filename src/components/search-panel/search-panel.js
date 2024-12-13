import React from "react";

import './search-panel.css';

const SearchPannel = () => {
    return (
        <input 
            className="form-controll search-input"
            placeholder="Поиск по записям"
            type="text"
        />
    )
};

export default SearchPannel;