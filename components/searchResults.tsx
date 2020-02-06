import React, { useContext, useEffect } from 'react';
import { Characters } from '../context/charactersContext';
import { Character } from '../interfaces/character';
import styled from '@emotion/styled';
import Card from '../components/card';

const ResultTileInner = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const SearchResults = () => {
    const { characters } = useContext(Characters);

    const test = characters;

    useEffect(() => {
        console.log('>> ctx in results component', typeof characters);
    }, [characters]);

    return (
        <div>
            results count: {test ? test.length : '0'}
            {test ? (
                test.map((item: Character, i: number) => (
                    <Card key={i}>
                        <ResultTileInner>
                            <div>ID: {item.id}</div>
                            <div>Name: {item.name}</div>
                            <div>{item.description}</div>
                        </ResultTileInner>
                    </Card>
                ))
            ) : (
                <Card>no results to display</Card>
            )}
        </div>
    );
};

export default SearchResults;
