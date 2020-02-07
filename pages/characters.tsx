import Head from '../components/head';
import Nav from '../components/nav';

import SearchBar from '../components/searchBar';
import SearchResults from '../components/searchResults';
import PageLayout from '../components/pageLayout';
import CharacterProfile from '../components/characterProfile';

const CharactersPage = () => {
    return (
        <div>
            <Head title="Character Search:" />
            <Nav />
            <PageLayout>
                <div className="hero">
                    <SearchBar />
                    <SearchResults />
                </div>
                <CharacterProfile />
            </PageLayout>
        </div>
    );
};

export default CharactersPage;
