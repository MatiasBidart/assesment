"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryRow from './CountryRow';

const CountryList = () => {
    const [countryList, setCountryList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 6;

    useEffect(() => {
        const URL = 'http://localhost:4000/api/v1/countries';
        
        axios.get(URL)
            .then(response => {
                setCountryList(response.data);
            })
            .catch(err => console.log(err.message));
    }, []);

    const handlePageChange = (direction) => {
        if (direction === 'next' && (currentPage * countriesPerPage) < countryList.length) {
            setCurrentPage(prevPage => prevPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countryList.slice(indexOfFirstCountry, indexOfLastCountry);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                {currentCountries.length > 0 ? 
                    currentCountries.map((country, index) => (
                        <CountryRow key={index} name={country.name} code={country.countryCode} />
                    )) : 
                    <p className="text-red-500">Something went wrong with the information</p>
                }
            </div>

            <div className="flex justify-between items-center">
                <button 
                    onClick={() => handlePageChange('prev')} 
                    disabled={currentPage === 1} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
                >
                    Previous
                </button>

                <button 
                    onClick={() => handlePageChange('next')} 
                    disabled={currentPage * countriesPerPage >= countryList.length} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CountryList;
