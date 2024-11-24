const { nagerApi } = require("../config");
const axios = require("axios");

// getAvailableCountries / All countries information 🌐
const getAvailableCountries = async () => {
    console.log(nagerApi);
    const response = await axios.get(`${nagerApi}/AvailableCountries`);
    return response.data;
};

// getCountryInfo / Single country information 🌐
const getCountryInfo = async (country) => {
    try {
        // Validating usage of iso2 code parameter
        if (!country) {
            throw new Error("The country code is mandatory as a parameter. Code type: iso2");
        }

        // Getting countryInfo
        const countryInfoResponse = await axios.get(`${nagerApi}/CountryInfo/${country}`);
        const countryInfo = countryInfoResponse.data;

        // Validating info coming from Nager API
        if (!countryInfo || !countryInfo.borders) {
            throw new Error(`Missed info from country: ${country}`);
        }

        // Concurrency
        const [populationResponse, flagResponse] = await Promise.all([
            axios.get(`https://countriesnow.space/api/v0.1/countries/population/q?country=${countryInfo.commonName}`),
            axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images/q?country=${countryInfo.commonName}`)
        ]);

        // Building Response
        const response = {
            country: countryInfo.commonName,
            listOfBorderCountries: countryInfo.borders || [],
            populationData: populationResponse.data?.data.populationCounts || {},
            flagURL: flagResponse.data?.data.flag || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
        };

        console.log(response);
        return response;

    } catch (error) {
        // Error handling
        console.error(`Error finding country "${country}":`, error.message);
        return {
            error: true,
            message: error.message
        };
    }
};

module.exports = {
    getAvailableCountries,
    getCountryInfo
};
