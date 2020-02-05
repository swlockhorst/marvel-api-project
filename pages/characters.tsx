import Head from '../components/head';
import Nav from '../components/nav';
import CharactersProvider from '../context/charactersContext';
import SearchBar from '../components/searchBar';
import SearchResults from '../components/searchResults';

const CharactersPage = () => {
    return (
        <CharactersProvider>
            <div>
                <Head title="Character Search:" />
                <Nav />
                <div className="hero">
                    <SearchBar />
                    <SearchResults />
                </div>
            </div>
        </CharactersProvider>
    );
};

export default CharactersPage;
