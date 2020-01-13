import Head from '../components/head';
import Nav from "../components/nav";
import Test from '../components/test';

export default () => (
    <div>
        <Head title="Home" />
        <Nav />
        <div className="hero">
            <Test />
        </div>
    </div>
);