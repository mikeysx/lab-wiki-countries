import React from 'react';


function CountriesList({ countries }) {
  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country) => (
          <a
            key={country.alpha3Code}
            className="list-group-item list-group-item-action"
            href={`/${country.alpha3Code}`}
          >
            <img
              className="flags" style={{ height: '15px'}}
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common} 
            /><br></br>
            {country.name.common}
          </a>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
