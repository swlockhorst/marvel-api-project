// @ts-ignore
const md5 = require('js-md5');

function hashMaker() {
    let timeStamp = Date.now();
    let publicKey = process.env.PUBLIC_KEY;
    let secretKey = process.env.SECRET_KEY;
    let hash = md5(`${timeStamp}${secretKey}${publicKey}`);

    return `&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
}

export default hashMaker;