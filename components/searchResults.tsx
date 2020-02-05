import React, { useContext, useEffect } from 'react';
import { Characters } from '../context/charactersContext';
import { Character } from '../interfaces/character';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
const ResultTile = styled.div`
    border: 2px solid red;
    padding: 10px;
    margin-bottom: 20px;
    max-width: 700px;
`;

const ResultTileInner = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const TileImg = styled.div`
    img {
        width: 100%;
        height: auto;
    }
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
                    <ResultTile key={i}>
                        <ResultTileInner>
                            <TileImg>
                                <img
                                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                    alt=""
                                />
                            </TileImg>
                            <div>ID: {item.id}</div>
                            <div>Name: {item.name}</div>
                            <div>{item.description}</div>
                            <div>
                                <span>
                                    <b>Series:</b>
                                </span>
                                {item.series.items.length > 0 ? (
                                    <ul>
                                        {item.series.items.map((item, i) => (
                                            <li key={i}>
                                                <a href={item.resourceURI}>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>No series found</span>
                                )}
                            </div>

                            <span>
                                <b>Comics:</b>
                            </span>
                            <ul>
                                {item.comics.items.map((comic, i) => (
                                    <li
                                        key={i}
                                        css={css`
                                            margin-bottom: 20px;
                                        `}
                                    >
                                        <a
                                            href={comic.resourceURI}
                                            target="_blank"
                                        >
                                            {comic.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <span>
                                <b>Stories:</b>
                            </span>
                            <ul>
                                {item.stories.items.map((story, i) => (
                                    <li
                                        key={i}
                                        css={css`
                                            margin-bottom: 20px;
                                        `}
                                    >
                                        <a
                                            href={story.resourceURI}
                                            target="_blank"
                                        >
                                            {story.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ResultTileInner>
                    </ResultTile>
                ))
            ) : (
                <div>no results to display</div>
            )}
        </div>
    );
};

export default SearchResults;
