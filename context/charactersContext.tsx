// @ts-ignore
import React, { createContext, useEffect, useState, ReactElement } from 'react';
// @ts-ignore
import fetchCharacter from '../api/character/getCharacter';
// @ts-ignore
export const Characters = createContext();

const CharactersProvider = (props: { children: ReactElement }) => {
    // @ts-ignore
    const [characters, setCharacters] = useState({});

    // useEffect(() => {
    //     async function getCharacter(query: any) {
    //         if (query === null || '' || undefined) return;
    //         const response = await fetchCharacter(query);

    //         setCharacters(response.data.data.results);
    //     }

    //     getCharacter(null);
    // }, []);

    function updateQuery(query: string) {
        if (query === null) return;

        async function getCharacter() {
            const response = await fetchCharacter(query);
            setCharacters(response.data.data.results);
            console.log('>> NEW CHARACTERS', characters);
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
