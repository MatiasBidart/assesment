"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PopulationChart from "../../components/PopulationCharts";
import CountryRow from "../../components/CountryRow";

const CountryPage = ({ params }) => {
  const { id } = params;
  const [countryInfo, setCountryInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const URL = `http://localhost:4000/api/v1/countries/${id}`;

      axios
        .get(URL)
        .then((response) => {
          setCountryInfo(response.data);
        })
        .catch((err) => console.error(err.message));
    }
  }, [id]);

  if (!countryInfo) {
    return <div className="p-4">Loading country information...</div>;
  }

  const borderCountries = countryInfo?.listOfBorderCountries || [];

  return (
    <div className="container mx-auto p-4">
      <div id="header">
        <div className="mb-4 flex items-center justify-center">
          <h1 className="text-8xl font-bold">{countryInfo.country}</h1>
          <img
            src={countryInfo?.flagURL}
            alt={`${countryInfo.country} flag`}
            className="w-auto h-14 object-contain ml-4"
          />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Bordering Countries</h2>
        {borderCountries.length > 0 ? (
          borderCountries.map((border, index) => (
            <CountryRow
              key={index}
              name={border.commonName}
              code={border.countryCode}
            />
          ))
        ) : (
          <p className="text-red-500">This country has no borders with other countries.</p>
        )}
      </div>

      <div>
        {countryInfo.populationData && countryInfo.populationData.length > 0 ? (
          <div className="p-4">
            <PopulationChart data={countryInfo.populationData} />
          </div>
        ) : (
          <p className="text-red-500">Population data is not available.</p>
        )}
      </div>
    </div>
  );
};

export default CountryPage;
