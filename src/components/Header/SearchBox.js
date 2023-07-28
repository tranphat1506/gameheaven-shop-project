import React, { useState } from 'react';
import FontIcon from '../Common/FontIcon';
const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleOnChange = (e) => {
        // on change search input
        const currentData = e.target.value;
        setSearchValue(currentData);
        console.log(searchValue);
    };
    const handleOnKeyDown = ({ key }) => {
        // on enter to search
        if (key.toLowerCase() === 'enter') handleSearching();
    };
    const handleSearching = () => {
        // on click on search icon
        const value = document.querySelector('.search-box__input').value;
        console.log('Search ', value);
    };

    return (
        <div className="search-box">
            <input
                className="search-box__input"
                title="Tìm gì đó đi nào..."
                type="text"
                placeholder="Tìm game gì đó đi nào..."
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
            />
            <div className="search-icon" onClick={handleSearching}>
                <FontIcon className="--icon" logoName="search" fontSize={20} />
            </div>
        </div>
    );
};

export default SearchBox;
