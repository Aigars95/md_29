import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import CountryData from '../data/CountryData';

const initialCountry = {
  id: 0,
  countryName: '',
  imgSrc: '',
  description: '',
};

const Country = () => {
  const [country, setCountry] = useState(initialCountry);

  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }

    const matchedCountry = CountryData.find((item) => item.id.toString() === id);

    if (matchedCountry) {
      setCountry(matchedCountry);
      return;
    }
    navigate('../../404');
  }, [id]);

  if (!country) {
    navigate('/404');
    return null;
  }

  const { countryName, imgSrc, description } = country;

  return (
    <div className="country--wrapper">

      <h1>{countryName}</h1>
      <img style={{ width: 200, height: 100 }} src={imgSrc} alt="Flag" />
      <p>{description}</p>
      <Link className="link" to="/countries">Go Back</Link>

    </div>
  );
};

export default Country;
