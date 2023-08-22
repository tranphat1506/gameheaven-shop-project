import React, { useRef, useState, memo, useCallback } from 'react';
import FontIcon from '../Common/FontIcon';
import { useNavigate } from 'react-router-dom';
const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const searchInputRef = useRef();
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        // on change search input
        const currentData = e.target.value.trim();
        handleSetSearchValue(currentData);
    };

    const handleSetSearchValue = useCallback((value) => {
        setSearchValue(value);
    }, []);

    const handleOnKeyDown = ({ key }) => {
        // on enter to search
        if (key.toLowerCase() === 'enter') handleSearching();
    };

    const handleSearching = useCallback(() => {
        // on click on search icon
        const value = searchValue.trim();
        if (!value) return searchInputRef.current.focus();
        navigate('/search?v=' + value);
    }, [searchValue]);

    // clean search
    const handleCleanSearchInput = () => {
        setSearchValue('');
        searchInputRef.current.value = '';
        searchInputRef.current.focus();
    };

    return (
        <div className="search-box">
            <input
                ref={searchInputRef}
                className="search-box__input"
                title="Tìm kiếm"
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

export default memo(SearchBox);
