require('dotenv').config()
const config = {
    port: process.env.PORT || 4000,
    nodeEnv: process.env.NODE_ENV || 'development',
    host: process.env.HOST || 'http://localhost:4000',
    nagerApi: process.env.NAGER_API_BASE || "https://date.nager.at/api/v3/AvailableCountries"
}
module.exports = config