import React, { createContext, useEffect, useState } from 'react';
import fetchCharacter from '../api/character/getCharacter';

export const CharactersContext = createContext({});

const CharactersProvider = (props: { children: React.ReactNode }) => {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        async function getCharacter() {
            const response = await fetchCharacter('wolverine');
            console.log(response);

            setCharacters(response.data.data.results);
        }
        getCharacter();
    }, []);

    function updateQuery(query: string) {
        console.log(query);
    }

    return (
        <CharactersContext.Provider value={{ characters, updateQuery }}>
            {props.children}
        </CharactersContext.Provider>
    );
};

export default CharactersProvider;
