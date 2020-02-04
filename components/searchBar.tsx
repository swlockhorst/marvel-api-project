import React, { useContext, useState, useEffect } from 'react';
import { Characters } from '../context/charactersContext';

const SearchBar = () => {
    const [query, setQuery] = useState();
    const { updateQuery } = useContext(Characters);

    useEffect(() => {}, [query]);

    function executeSearch(searchQuery: string) {
        if (typeof updateQuery === 'function') {
            updateQuery(searchQuery);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
                onKeyPress={event => {
                    if (event.charCode === 13 && query.length > 0) {
                        executeSearch(query);
                    }
                }}
            />
            <button
                onClick={() => {
                    query.length > 0 && executeSearch(query);
                }}
            >
                Search: {query}
            </button>
        </div>
    );
};

export default SearchBar;
