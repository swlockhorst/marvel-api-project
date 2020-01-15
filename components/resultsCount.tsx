import React, { useContext } from 'react';
import CharactersContext from '../context/charactersContext';

const ResultsCount = () => {
    const value = useContext(CharactersContext);
    console.log(value);
    return <div>{/*<div>{value.hello}</div>*/}</div>;
};

export default ResultsCount;
