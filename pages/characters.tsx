import Head from '../components/head';
import Nav from "../components/nav";
import SearchBar from "../components/searchBar";


export default () => (
    <div>
        <Head title="Home" />
        <Nav />
        <div className="hero">
            <SearchBar />
        </div>
    </div>
);