import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  const country = countries.find((c) => c.alpha3Code === alpha3Code);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img
        src={`https://flagpedia.net/data/flags/h80/${country.alpha2Code.toLowerCase()}.png`}
        alt={country.name.common}
      />
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      {/* Add other country details */}
    </div>
  );
}

export default CountryDetails;