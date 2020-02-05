import React, { createContext, useState, ReactElement } from 'react';
import fetchCharacter from '../api/getCharacter';

// @ts-ignore
export const Characters = createContext();

const CharactersProvider = (props: { children: ReactElement }) => {
    const [characters, setCharacters] = useState(null);

    function updateQuery(query: string) {
        if (query === null) return;
        async function getCharacter() {
            const response = await fetchCharacter(query);
            setCharacters(response.data.data.results);
        }
        getCharacter();
    }

    return (
        <Characters.Provider
            value={{
                characters,
                updateQuery,
            }}
        >
            {props.children}
        </Characters.Provider>
    );
};

export default CharactersProvider;
