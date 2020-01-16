import React, { useContext } from 'react';
import CharactersContext from '../context/charactersContext';

const ResultsCount = () => {
    const value = useContext(CharactersContext);
    console.log(value);
    // @ts-ignore
    return <button></button>;
};

export default ResultsCount;
