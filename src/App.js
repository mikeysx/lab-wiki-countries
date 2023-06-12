import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      fetch('https://ih-countries-api.herokuapp.com/countries')
        .then((response) => response.json())
        .then((data) => setCountries(data));
    }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />} />
            <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
