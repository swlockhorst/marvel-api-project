import axios from 'axios';
import hashMaker from "../../helpers/hashMaker";

async function getCharacter(query: string) {
    let apiGateway = process.env.API_GATEWAY;
    let url = `${apiGateway}/v1/public/characters?name=${query}${hashMaker()}`;
    try {
        const [response] = await Promise.all([axios.get(url)]);
        return response;
    } catch (error) {
        return error;
    }
}

export default getCharacter;