import axios from 'axios';
import hashMaker from '../helpers/hashMaker';

async function fetchComics(query: string) {
    let apiGateway = process.env.API_GATEWAY;
    let url = `${apiGateway}/comics?titleStartsWith=${query}${hashMaker()}`;
    try {
        const [response] = await Promise.all([axios.get(url)]);
        return response;
    } catch (error) {
        return error;
    }
}

export default fetchComics;
