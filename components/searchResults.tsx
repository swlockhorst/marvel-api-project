import React, { useContext } from 'react';
import { Characters } from '../context/charactersContext';
import { Character } from '../interfaces/character';
import Card from '../components/card';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Result = styled.button`
    background: none;
    padding: 20px;
    border-radius: 20px;
    color: red;
`;

const ResultInner = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResultContent = styled.div`
    text-align: left;
`;

const ResultCount = styled.div`
    text-align: left;
    margin-bottom: 20px;
`;

const SearchResults = () => {
    const { characters } = useContext(Characters);
    const { updateSelectedCharacter } = useContext(Characters);

    function executeSearch(id: number) {
        updateSelectedCharacter(id);
    }

    return (
        <div>
            <ResultCount>
                results count: {characters ? characters.length : '0'}
            </ResultCount>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                `}
            >
                {characters ? (
                    characters.map((item: Character, i: number) => (
                        <Result
                            key={i}
                            onClick={() => {
                                executeSearch(item.id);
                            }}
                            css={css`
                                margin-bottom: ${characters ? '20px' : 0};
                            `}
                        >
                            <ResultInner>
                                <ResultContent>ID: {item.id}</ResultContent>
                                <ResultContent>Name: {item.name}</ResultContent>
                            </ResultInner>
                        </Result>
                    ))
                ) : (
                    <Card>no results to display</Card>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
