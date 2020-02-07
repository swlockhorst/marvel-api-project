import React, { useContext } from 'react';
import { Characters } from '../context/charactersContext';
import { Character } from '../interfaces/character';
import styled from '@emotion/styled';
import Card from '../components/card';

const Result = styled.button`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 5px;
    width: 100%;
`;

const SearchResults = () => {
    const { characters } = useContext(Characters);
    const { updateSelectedCharacter } = useContext(Characters);

    function executeSearch(id: number) {
        updateSelectedCharacter(id);
    }

    return (
        <div>
            results count: {characters ? characters.length : '0'}
            {characters ? (
                characters.map((item: Character, i: number) => (
                    <Result
                        key={i}
                        onClick={() => {
                            console.log('>> Selected ID:', item.id);
                            executeSearch(item.id);
                        }}
                    >
                        <div>ID: {item.id}</div>
                        <div>Name: {item.name}</div>
                    </Result>
                ))
            ) : (
                <Card>no results to display</Card>
            )}
        </div>
    );
};

export default SearchResults;
