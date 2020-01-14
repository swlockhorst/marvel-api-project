import Head from '../components/head';
import Nav from "../components/nav";
import getCharacter from "../api/character/getCharacter";

export default () => (
    <div>
        <Head title="Home" />
        <Nav />
        <div className="hero">
            <button onClick={() => {
                getCharacter('wolverine').then(r => console.log(r.data.data.results));
            }}>Click me</button>
        </div>
    </div>
);