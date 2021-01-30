import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import '../gedichten/gedichten.page'; // using gedichten css since its the same page

const Muren = () => {
  const [walls, setWalls] = useState();

  const history = useHistory();

  useEffect(() => {
    axios.get('/empty-walls').then((res) => setWalls(res.data));
  }, []);

  // classnames are from 'gedichten' code so i can reuse that css as well
  return (
    <div className="gedichten">
      <div className="section">
        <div className="title">Muren</div>
        <div className="paragraph">
          Hier een lijst met muren waar we nog graag gedichten of teksten op
          willen plaatsten. Klik op een foto voor meer informatie.
        </div>
      </div>
      <div className="gallery">
        {walls
          ? walls.map((wall) => {
              return (
                <div
                  className="image"
                  style={{ backgroundImage: `url(${wall.image.url})` }}
                  onClick={() =>
                    history.push('/haarlemsemuren/muren/' + wall.id)
                  }
                ></div>
              );
            })
          : 'Er is iets misgegaan'}
      </div>
    </div>
  );
};

export default Muren;
