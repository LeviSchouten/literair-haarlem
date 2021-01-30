import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import './gedichten.styles.scss';

const Gedichten = () => {
  const [walls, setWalls] = useState();

  const history = useHistory();

  useEffect(() => {
    axios.get('/walls').then((res) => setWalls(res.data));
  }, []);

  console.log(walls);

  return (
    <div className="gedichten">
      <div className="section">
        <div className="title">Gedichten</div>
        <div className="paragraph">
          Hier een lijst met alle muren waar we al gedichten of teksten op gezet
          hebben. Klik op een foto voor meer informatie.
        </div>
      </div>
      <div className="gallery">
        {walls
          ? walls.map((wall) => {
              return (
                <div
                  className="image"
                  style={{ backgroundImage: `url(${wall.image[0].url})` }}
                  key={wall.id}
                  onClick={() =>
                    history.push('/haarlemsemuren/gedichten/' + wall.id)
                  }
                ></div>
              );
            })
          : 'Geen gedichten gevonden'}
      </div>
    </div>
  );
};

export default Gedichten;
