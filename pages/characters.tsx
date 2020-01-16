import Head from '../components/head';
import Nav from '../components/nav';
import CharactersProvider from '../context/charactersContext';
import SearchBar from '../components/searchBar';

export default () => {
    // const state = useContext(CharactersContext);
    return (
        <CharactersProvider>
            <div>
                <Head title="Characters" />
                <Nav />
                <div className="hero">
                    <SearchBar />
                    {/* selected result with selectable tabs/sections to display more info */}
                </div>
            </div>
        </CharactersProvider>
    );
};
