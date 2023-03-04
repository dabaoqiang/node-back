const axios = require("axios");

const BASE_URL = `https://google-translate1.p.rapidapi.com`

const encodedParams = (q, target, source) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", q);
    encodedParams.append("target", "zh");
    encodedParams.append("source", "en");
    return encodedParams;
};

module.exports = {
    translateMessage: (content, source, target) => axios({
        method: "POST",
        url: BASE_URL + `/language/translate/v2`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '5b17119102msh40356157609b637p1ddba3jsnc8aabecfa682',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams(content, target, source),
    })
}