import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import './gedicht.styles.scss';

const Gedicht = () => {
  const [wall, setWall] = useState();

  const location = useLocation().pathname;
  const id = location.substr(location.lastIndexOf('/') + 1);

  useEffect(() => {
    axios.get('/walls/' + id).then((res) => setWall(res.data));
  }, []);

  if (!wall) {
    return <div className="text">Oeps er is iets misgegaan.</div>;
  }

  return (
    <div className="gedicht">
      <div className="text">
        <div className="title">{wall.titel}</div>
        <div className="location">{wall.locatie}</div>
        <div className="paragraph">{wall.gedicht}</div>
        <div className="author">{wall.auteur}</div>
      </div>
      <div
        className="image"
        style={{ backgroundImage: `url(${wall.image[0].url})` }}
      ></div>
    </div>
  );
};

export default Gedicht;
