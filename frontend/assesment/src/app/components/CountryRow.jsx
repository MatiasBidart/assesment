"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const CountryRow = ({ name, code }) => {
    const [countryInfo, setCountryInfo] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const URL = `http://localhost:4000/api/v1/countries/${code}`;

        axios.get(URL)
            .then(response => {
                setCountryInfo(response.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [code]);

    const handleClick = () => {
        if (countryInfo) {
            router.push(`/country/${code}`);
        } else {
            console.error("Country info is not available yet.");
        }
    };

    return (
        <div
            className='flex items-center justify-between p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-200 rounded-lg max-w-26'
            onClick={handleClick}
        >
            <img
                src={countryInfo?.flagURL}
                alt={`${name} flag`}
                className="w-auto h-6 object-contain"
            />
            <div className="text-lg font-semibold">{name}</div>
        </div>
    );
};

export default CountryRow;

