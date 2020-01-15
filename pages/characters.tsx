import Head from '../components/head';
import Nav from '../components/nav';
import SearchBar from '../components/searchBar';
import ResultsCount from '../components/resultsCount';
import CharacterContext from '../context/charactersContext';

let characterState = {
    key: 'value',
};

export default () => {
    return (
        <CharacterContext.Provider value={characterState}>
            <div>
                <Head title="Characters" />

                <Nav />

                <div className="hero">
                    <SearchBar />

                    <ResultsCount />

                    {/*    results list    */}

                    {/* selected result with selectable tabs/sections to display more info */}
                </div>
            </div>
        </CharacterContext.Provider>
    );
};
