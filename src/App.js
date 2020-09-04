import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, Select, MenuItem } from "@material-ui/core";

function App() {
  // hooks
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  // STATE = How to write a variable in REACT <<<<<<<<

  // https://disease.sh/v3/covid-19/countries

  // useEffect = Runs a piece of code
  // based on a given condition
  useEffect(() => {
    // The code inside here will run once 
    // when the component loads and not again

    // async -> send a request, wait for it, do something with info

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country, // United Kingdom, United States, France
              value: country.countryInfo.iso2 // UK, USA, FR
            }
          ));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    console.log(">>>>>", countryCode);

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {/* Loop through all the countries
            and show a drop down list of the options */}
            {
              countries.map((country) => (
                <MenuItem alue={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      { /* Title + Select input dropdown filed */}

      { /* InfoBoxs */}
      { /* InfoBoxs */}
      { /* InfoBoxs */}

      { /* Table */}
      { /* Graph */}

      { /* Map */}
    </div>
  );
}

export default App;
