import axios from 'axios';
import hashMaker from '../helpers/hashMaker';

async function fetchCreators(query: string) {
    let apiGateway = process.env.API_GATEWAY;
    let url = `${apiGateway}/creators?nameStartsWith=${query}${hashMaker()}`;
    try {
        const [response] = await Promise.all([axios.get(url)]);
        return response;
    } catch (error) {
        return error;
    }
}

export default fetchCreators;
