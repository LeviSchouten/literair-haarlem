import React from 'react';

import './informatie.styles.scss';

const Informatie = () => {
  return (
    <div className="informatie">
      <div className="section">
        <div className="text">
          <div className="title">Haarlemse Muren</div>
          <div className="paragraph">
            We willen op Haarlemse muren teksten en gedichten van Haarlemse
            schrijvers en dichters plaatsen. Muren die publiek zichtbaar zijn.
            Zo brengen we de literatuur op straat. Om te verbazen. Te
            verwonderen en te amuseren. Haarlem is bij uitstek een stad van
            schrijvers en dichters. Haarlem heeft een rijke literaire traditie.
            Dat willen we vieren. Die erfenis mag getoond worden. Wie zijn dan
            die Haarlemse schrijvers en dichters? Nou bijvoorbeeld: Godfried
            Bomans, Harry Mulisch, Willem Bilderdijk, Lodewijk van Deyssel,
            Nicolaas Beets (Hildebrand), Frederik van Eeden, Arthur van
            Schendel, Lodewijk Wiener, Geerten en Douschka Meijsing, Louis
            Ferron, Lennaert Nijgh, Jan Kal, Nicolien Mizee, Pieter Steinz en
            Joost Zwagerman. En nog veel meer. Onze eigen stadsdichters
            bijvoorbeeld
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/pexels-cottonbro-4738075.jpg'}
          alt="haarlemse muren"
          className="walls-image"
        />
      </div>
      <hr />
      <div className="section">
        <img
          src={process.env.PUBLIC_URL + '/images/janstraat.jpg'}
          alt="haarlemse muren"
          className="walls-image-last"
        />
        <div className="text">
          <div className="title">Hoe werken we?</div>
          <div className="paragraph">
            We werken zo veel mogelijk samen en we zoeken verbinding met zoveel
            mogelijk partijen. Zoals de gemeente Haarlem, Nederlandse
            Spoorwegen, Spaarnelanden, fietsenstalling in de Jacobijnestraat,
            bibliotheek. Met de Stichting Haarlemse Stripdagen, het Godfried
            Bomans Genootschap bereiden we momenteel initiatieven voor. Met de
            Haarlemse stripdagen willen we jaarlijks een stripmuur met een
            literair tintje realiseren. Met het Godfried Bomans genootschap
            bereiden we een aantal activiteiten voor rond het moment dat hij 50
            jaar geleden gestorven is (in 2021).
          </div>
          <div className="paragraph">
            Vervolgens gaan we met de ideeën aan de gang. Zoeken steun bij
            partijen, zoals de gemeente, Spaarnelanden, projectontwikkelaars
            etc. We zoeken zo nodig contact met sponsors.
          </div>
        </div>
      </div>
      <div className="section section-bomans">
        <div className="godfried-bomans">
          <div className="title">Wat doen we nu al?</div>
          <div className="text">
            <div className="title">Godfried Bomans</div>
            <div className="paragraph">
              In 2021 is het 50 jaar geleden dat Godfried Bomans overleed. Daar
              willen we aandacht aan geven. Dat doen we samen met het Godfried
              Bomans genootschap. We hebben een aantal activiteiten:
            </div>
            <img
              src={process.env.PUBLIC_URL + '/images/godfried.jpg'}
              alt="Godfried Bomans"
              className="person"
            />
          </div>
        </div>
        <div className="text-list">
          Hij heeft een groot aantal jaren gewoond in de Zonnelaan, in het van
          Loghemcomplex in Tuinwijk-Zuid. Daar willen we, samen met de
          bewonersvereniging, een tekst realiseren. De bewonersverening is
          enthousiast. We bespreken momenteel mogelijke aforismen van Bomans.
          <br />
          <br />
          We zijn in gesprek met de NS of op het station van Haarlem een
          passende tekst van Bomans te plaatsen <br />
          <br />
          We willen graag op of bij de Bakenessergracht aandacht aan Bomans
          schenken. Door een gerichte actie van Bomans en Harry Prenen is
          voorkomen dat de gemeentelijke plannen om de gracht te dempen
          verhinderd. Ze schreven een ingezonden brief in het Haarlems Dagblad
          namens een niet-bestaand genootschap: de Rijnlandse Academie. De brief
          had effect en de gracht bleef voor Haarlem behouden.
          <br />
          <br /> Samen met de organisatoren van de Haarlemse stripdagen willen
          we in 2021 een muurtekening realiseren.
          <br />
          <br /> In de te renoveren Wijngaardtuin staat een beeldje van Bomans.
          Daar zou ook een mooi aforisme van Bomans passen.
        </div>
      </div>
    </div>
  );
};

export default Informatie;
