import Head from '../components/head';
import Nav from '../components/nav';
import CharactersProvider, { Characters } from '../context/charactersContext';
import SearchBar from '../components/searchBar';
// @ts-ignore
import { useContext, useEffect, useState } from 'react';

export default () => {
    const results = useContext(Characters);

    return (
        <CharactersProvider>
            <div>
                <Head title="Character Search:" />
                <Nav />
                <div className="hero">
                    <SearchBar />
                    {JSON.stringify(results)}

                    {/* selected result with selectable tabs/sections to display more info */}
                </div>
            </div>
        </CharactersProvider>
    );
};
