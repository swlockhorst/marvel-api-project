import React from 'react';
import { useContext } from 'react';
import { Characters } from '../context/charactersContext';
import { Character } from '../interfaces/character';
import Card from './card';
import { css } from '@emotion/core';
import AspectRatio from './aspectRatio';
// import { useTheme } from 'emotion-theming';

const CharacterProfile = () => {
    const { selectedCharacter } = useContext(Characters);
    // const theme = useTheme();
    return (
        <div>
            {selectedCharacter ? (
                selectedCharacter.map((item: Character, i: number) => (
                    <div key={i}>
                        {item.thumbnail.path.includes('image_not_available') ? (
                            <AspectRatio x={4} y={3}>
                                <span
                                    css={css`
                                        position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        text-align: center;
                                    `}
                                >
                                    No Image Found
                                </span>
                            </AspectRatio>
                        ) : (
                            <div
                                css={css`
                                    position: relative;
                                `}
                            >
                                <img
                                    css={css`
                                        width: 100%;
                                        /* filter: grayscale(1); */
                                    `}
                                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                    alt={item.name}
                                />
                            </div>
                        )}

                        <div>ID: {item.id}</div>
                        <div>Name: {item.name}</div>
                        <div>Description: {item.description}</div>
                        <div>
                            Available Comics:{' '}
                            {item.comics.available > 0
                                ? item.comics.available
                                : 'N/A'}
                        </div>
                        <div>Available Stories: {item.stories.available}</div>
                        <div>Available Events: {item.events.available}</div>
                        <div>Available Series: {item.series.available}</div>
                    </div>
                ))
            ) : (
                <Card>...</Card>
            )}
        </div>
    );
};

export default CharacterProfile;
