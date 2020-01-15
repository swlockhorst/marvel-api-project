import React, {useEffect, useState} from 'react';
import getCharacter from "../api/character/getCharacter";
// import {log} from "util";

const SearchBar = () => {
        const [query, setQuery] = useState('');
        const [data, setData] = useState([]);

    useEffect(() => {
        console.log(data);
    }, [data]);

        return (
            <div>
                <input type="text" value={query} onChange={event => setQuery(event.target.value)} />

                <button onClick={() => {
                    getCharacter(query).then(r => setData(r.data.data.results));
                }}>Click me
                </button>
            </div>
        )
    }
;

export default SearchBar;