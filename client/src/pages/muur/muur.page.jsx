import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import './muur.styles.scss';

const Muur = () => {
  const [wall, setWall] = useState();

  const location = useLocation().pathname;
  const id = location.substr(location.lastIndexOf('/') + 1);

  useEffect(() => {
    axios.get('/empty-walls/' + id).then((res) => setWall(res.data));
  }, []);

  if (!wall) {
    return <div className="text">Oeps er is iets misgegaan.</div>;
  }

  return (
    <div className="muur">
      <div className="text">
        <div className="location">{wall.locatie}</div>
        <div className="paragraph">{wall.informatie}</div>
      </div>
      <div
        className="image"
        style={{ backgroundImage: `url(${wall.image.url})` }}
      ></div>
    </div>
  );
};

export default Muur;
