import React, {useState} from 'react';
import getCharacter from "../api/character/getCharacter";

const SearchBar = () => {
        const [query, setQuery] = useState('');
        const [data, setData] = useState([]);

        return (
            <div>
                <input type="text" value={query} onChange={event => setQuery(event.target.value)} />

                <button onClick={() => {
                    getCharacter(query).then(r => setData(r.data.data.results));
                    console.log(data);
                }}>Click me
                </button>

            </div>
        )
    }
;

export default SearchBar;