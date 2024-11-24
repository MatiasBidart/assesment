const router = require('express').Router()
const countriesServices = require('./countries.service')

router.route('/')
    .get(countriesServices.getAvailableCountries)
router.route('/:countryCode')
    .get(countriesServices.getCountryInfo)

module.exports = router