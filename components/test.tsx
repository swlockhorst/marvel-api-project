import { useEffect, useState, useRef } from 'react';

const md5 = require('js-md5');

const Test = () => {
    let publicKey = process.env.PUBLIC_KEY;
    let secretKey = process.env.SECRET_KEY;
    let apiGateway = process.env.API_GATEWAY;
    let timeStamp = Date.now();
    let hash = md5(`${timeStamp}${secretKey}${publicKey}`);

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(
        `${apiGateway}/v1/public/characters?name=${query}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    );

    const isFirstRun = useRef(true);

    async function getCharacter() {
        const res = await fetch(url);
        const marvelData = await res.json();
        if (marvelData.code !== 200) {
            await setData([]);
        } else {
            await setData([...marvelData.data.results]);
        }
    }

    useEffect(() => {
        if (isFirstRun.current) {
            getCharacter();
        }
    }, [url]);

    return (
        <>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />

                <button
                    onClick={() => {
                        setUrl(
                            `${apiGateway}/v1/public/characters?name=${query}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
                        );
                    }}
                >
                    Click me!
                </button>
            </div>
            <div>{query}</div>
            <br />
            <div>{url}</div>

            {data.map(thing => {
                return (
                    <div key={thing.id}>
                        <img
                            src={`${thing.thumbnail.path}.${thing.thumbnail.extension}`}
                        />
                        <br />
                        {thing.name}
                        <br />
                        {thing.description}
                        <br />
                    </div>
                );
            })}
        </>
    );
};

export default Test;
