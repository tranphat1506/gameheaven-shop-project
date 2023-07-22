import React, { useState } from 'react';

const SearchBox = ()=>{
    const [searchValue, setSearchValue] = useState('');

    const handleOnChange = (e)=>{ // on change search input
        const currentData = e.target.value;
        setSearchValue(currentData);
        console.log(searchValue);
    }
    return (
        <div className="search-box">
            <input title="Tìm gì đó đi nào..." type="text" placeholder="Tìm game gì đó đi nào..." onChange={handleOnChange}/>
            <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M795.615-124.54 535.077-385.078q-30.848 26.414-72.61 40.207t-83.875 13.793q-108.311 0-181.874-73.514-73.563-73.514-73.563-179.999t73.514-180.062q73.514-73.577 179.719-73.577 106.206 0 180.255 73.533 74.048 73.532 74.048 180.054 0 43.028-13.884 83.335-13.885 40.308-41.116 73.615l262.154 260.539-42.23 42.614ZM377.039-389.461q82.455 0 138.862-56.407t56.407-138.786q0-82.378-56.319-138.785t-138.862-56.407q-83.056 0-139.322 56.407-56.266 56.407-56.266 138.785 0 82.379 56.266 138.786t139.234 56.407Z"/></svg>
            </div>
        </div>
    );
}

export default SearchBox;