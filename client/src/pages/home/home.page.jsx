import React from 'react';
import { useHistory } from 'react-router-dom';

// import dinner from './images/pexels-elevate-1267321.jpg';

import './home.styles.scss';

const Home = () => {
  const history = useHistory();

  return (
    <div className="home">
      <div className="section">
        <p>
          <b>Literair Haarlem</b> organiseert meerdere keren per jaar literatuur
          evenementen en diners in Haarlem. Kijk in onze agenda voor ons eerst
          volgende evenement. Deze tekst mag eigenlijk nog wel wat langer, maar
          kan zo gauw even niks verzinnen. Maar dat het uiteindelijk een zin of
          tien wordt.
        </p>
        <img
          src={process.env.PUBLIC_URL + '/images/pexels-elevate-1267321.jpg'}
          alt="literair haarlem evenement"
          className="dinner-image"
        />
      </div>
      <hr />
      <div className="section">
        <img
          src={process.env.PUBLIC_URL + '/images/pexels-cottonbro-4738075.jpg'}
          alt="haarlemse muren"
          className="walls-image"
        />
        <div className="text">
          <div className="title">Hoe u kan bijdragen.</div>
          <p>
            Voor ons project ‘Haarlemse Muren’ willen wij op verschillende muren
            in Haarlem Teksten zetten van Haarlemse schrijvers. Heeft u nog
            suggesties voor muren, of teksten laat het ons weten!
          </p>
          <button onClick={() => history.push('/haarlemsemuren/informatie')}>
            Lees meer
          </button>
        </div>
      </div>
      <hr />
      <div className="socials">
        <div className="title-centered">Blijf op de hoogte.</div>
        <div className="social-buttons">
          <button
            className="facebook-button"
            onClick={() =>
              (window.location.href =
                'https://nl-nl.facebook.com/literair.haarlem/')
            }
          >
            volg ons op Facebook
          </button>
          <button className="newsletter-button">
            Abonneer op onze nieuwsbrief
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
