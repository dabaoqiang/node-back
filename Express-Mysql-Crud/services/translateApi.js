const AstrologyAPI = require('./translateConfig')

const translateApi = async (translate) => {
    console.log(translate.contents)
    const response = await AstrologyAPI.translateMessage(translate.contents, 'en', 'zh')
    return response.data.data.translations[0];
}

module.exports = {
    translateApi
}
