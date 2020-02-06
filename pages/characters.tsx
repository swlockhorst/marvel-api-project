import Head from '../components/head';
import Nav from '../components/nav';
import CharactersProvider from '../context/charactersContext';
import SearchBar from '../components/searchBar';
import SearchResults from '../components/searchResults';
import PageLayout from '../components/pageLayout';
import { css } from '@emotion/core';

const CharactersPage = () => {
    return (
        <CharactersProvider>
            <div>
                <Head title="Character Search:" />
                <Nav />
                <PageLayout>
                    <div className="hero">
                        <SearchBar />
                        <SearchResults />
                    </div>
                    <div
                        css={css`
                            background: red;
                        `}
                    >
                        [character Profile]
                    </div>
                </PageLayout>
            </div>
        </CharactersProvider>
    );
};

export default CharactersPage;
