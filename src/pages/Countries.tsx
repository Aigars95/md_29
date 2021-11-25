import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CountryData from '../data/CountryData';

const Countries = () => (
  <div className="countries__container">
    <h1>My visited countries</h1>
    {CountryData.map((country) => <Link className="link" to={`/countries/${country.id}`}>{country.countryName}</Link>)}
    <Outlet />
  </div>
);
export default Countries;
