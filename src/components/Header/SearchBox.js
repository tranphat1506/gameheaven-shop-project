import React, { useEffect, useRef, useState } from 'react';
import FontIcon from '../Common/FontIcon';
const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const searchInputRef = useRef();

    const handleOnChange = (e) => {
        // on change search input
        const currentData = e.target.value.trim();
        setSearchValue(currentData);
        console.clear();
        console.log(searchValue);
    };

    const handleOnKeyDown = ({ key }) => {
        // on enter to search
        if (key.toLowerCase() === 'enter') handleSearching();
    };

    // Effect user search something
    useEffect(() => {
        const id = setTimeout(() => {
            handleSearchSuggestion();
        }, 500);
        return () => {
            clearTimeout(id);
        };
    }, [searchValue]);

    const handleSearchSuggestion = () => {
        const suggestKeyword = searchInputRef.current.value;
        if (!suggestKeyword) return console.log('Suggest trend item...');
        return console.log(`Suggest ${suggestKeyword}`);
    };

    const handleSearching = () => {
        // on click on search icon
        const value = searchInputRef.current.value.trim();
        if (!value) return searchInputRef.current.focus();
        console.log('Direct to /search?v=', value);
    };

    // clean search
    const handleCleanSearchInput = () => {
        searchInputRef.current.value = '';
        searchInputRef.current.focus();
    };

    return (
        <div className="search-box">
            <input
                ref={searchInputRef}
                className="search-box__input"
                title="Tìm gì đó đi nào..."
                type="text"
                placeholder="Tìm game gì đó đi nào..."
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
            />
            <div className="search-icon" onClick={handleSearching}>
                <FontIcon
                    className="--icon --icon-search"
                    logoName="search"
                    fontSize={20}
                />
            </div>
            <div className="clear-icon" onClick={handleCleanSearchInput}>
                <FontIcon
                    className="--icon --icon-clear"
                    logoName="cancel"
                    fontSize={20}
                    fill={1}
                />
            </div>
        </div>
    );
};

export default SearchBox;
