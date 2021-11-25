import React from 'react';
import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import NotFound from './pages/NotFound';
import Country from './pages/Country';

const App = () => (
  <div className="App">
    <nav>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/countries">Countries</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="countries/:id" element={<Country />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
