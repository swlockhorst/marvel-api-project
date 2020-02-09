import React, { createContext, useState, ReactElement } from 'react';
import fetchCharacter from '../api/character/getCharacter';
import fetchCharacterById from '../api/character/getCharacterbyId';

// @ts-ignore
export const Characters = createContext();

const CharactersProvider = (props: { children: ReactElement }) => {
    const [characters, setCharacters] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    function updateQuery(query: string) {
        if (query === null) return;
        async function getCharacter() {
            const response = await fetchCharacter(query);
            setCharacters(response.data.data.results);
        }
        getCharacter();
    }

    function updateSelectedCharacter(id: string) {
        if (id === null) return;

        async function getCharacterById() {
            const response = await fetchCharacterById(id);
            setSelectedCharacter(response.data.data.results);
        }
        getCharacterById();
    }

    return (
        <Characters.Provider
            value={{
                characters,
                selectedCharacter,
                updateQuery,
                updateSelectedCharacter,
            }}
        >
            {props.children}
        </Characters.Provider>
    );
};

export default CharactersProvider;
