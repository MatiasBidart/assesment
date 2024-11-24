const countriesControllers = require('./countries.controller');

const getAvailableCountries = (req,res) => {
    countriesControllers.getAvailableCountries()
    .then((data)=>{res.status(200).json(data)})
    .catch((err) => {res.status(400).json({message: err.message})})
}

const getCountryInfo = (req, res) => {
    const country = req.params.countryCode
    countriesControllers.getCountryInfo(country)
    .then((data) => {res.status(200).json(data)})
    .catch((err) => {res.status(400).json({message: err.message})})
}
module.exports = {
    getAvailableCountries,
    getCountryInfo
}