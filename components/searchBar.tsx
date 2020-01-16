// @ts-ignore
import React, { useContext, useEffect, useState } from 'react';
import { CharactersContext } from '../context/charactersContext';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    // const [data, setData] = useState([CharactersContext]);

    // @ts-ignore
    const { updateQuery } = useContext(CharactersContext);

    useEffect(() => {}, []);

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
                Click me
            </button>
        </div>
    );
};

export default SearchBar;
