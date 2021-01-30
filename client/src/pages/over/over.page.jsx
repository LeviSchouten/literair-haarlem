import React from 'react';

import Employee from '../../components/employee/employee.component.jsx';

import './over.styles.scss';

const Over = () => {
  return (
    <div className="over">
      <div className="section">
        <div className="title">Wat doen wij?</div>
        <div className="text">
          <p>
            Stichting Literair Haarlem organiseert literaire evenementen in
            Haarlem. De stichtingsbestuur bestaat uit: Maarten Brock
            (voorzitter), Karlijn Waterman (secretaris), Hans Nusselder
            (penningmeester), Eric J. Coolen, Vincent Elzinga,
          </p>
          <p>
            Flip Hamann en Henny Leeflang. Minimaal vier maal per jaar
            organiseert Literair Haarlem een grootschalig literair evenement in
            Noord-Hollands Archief/Janskerk te Haarlem. Veelal in samenwerking
            met het Ampzing Genootschap.
          </p>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="title">Het Team</div>
        <div className="team">
          <Employee
            props={{
              name: 'Vincent Elzinga',
              content:
                'Vincent Elzinga is sinds oktober 2019 eigenaar van de Haarlemse buurtboekwinkel Kennemer Boekhandel, waar ze een breed assortiment literaire fictie en non-fictie en kinderboeken hebben. Eerder werkte hij onder meer als fonds-, eind- en schrijvend redacteur bij uitgeverijen en vak- en opinieweekbladen. Hij leest graag klassiekers en contemporaine literatuur. www.kennemerboekhandel.nl',
              image: 'vincent.jpg',
            }}
          />
          <Employee
            props={{
              name: 'Eric Coolen',
              content:
                'Tekenaar en ontwerper/maker van boeken, beelden, gevelstenen, glas-in-loodramen en wat niet al. Mede-oprichter van: het Ampzing Genootschap, Literair Haarlem en Nieuwe Gracht Producties. Won in 2013 Kunst- en Cultuurprijs (publieksprijs) de Olifant. Ontving in 2015 de Penning van Verdienste en in 2017 de Antithese-prijs.',
              image: 'eric.jpg',
            }}
          />
          <Employee
            props={{
              name: 'Flip Hamman',
              content:
                'Drs. P.J.L.M. (Flip) Hammann was docent Nederlands, ckv en decaan vwo op het Mendelcollege in Haarlem. Hij was bestuurslid van het L.H. Wienergenootschap (over wie hij een boek redigeerde) en is redacteur van het literaire tijdschrift Vestdijkkroniek. Daarnaast verzorgt hij literaire lezingen en wandelingen.',
              image: 'flip.png',
            }}
          />
          <Employee
            props={{
              name: 'Karlijn Waterman',
              content:
                'literatuurliefhebber, werkzaam bij de Nederlandse Taalunie (www.taalunie.org) waar zij het onderwijs Nederlands buiten het Nederlandse taalgebied coördineert, onder meer in de buurlanden, het Caribisch gebied en de wereldwijde neerlandistiek. In het verleden heeft voor haar werk literaire en culturele evenementen georganiseerd.',
              image: 'karlijn.jpg',
            }}
          />
          <Employee
            props={{
              name: 'Hans Nusselder',
              content:
                'Hans Nusselder, voorheen directeur uitgeverij, tegenwoordig consultant privacywetgeving. Liefhebber van literatuur, fictie en non-fictie',
              image: 'hans.jpg',
            }}
          />
          <Employee
            props={{
              name: 'Maarten Brock',
              content:
                'neerlandicus en literatuurliefhebber, werkzaam bij het Noord-Hollands Archief.',
              image: 'maarten.jpg',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Over;
