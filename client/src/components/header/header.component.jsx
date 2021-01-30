import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <div className="title">Literair Haarlem</div>
      <div className="navigation">
        <ul>
          <li className="navbar-hover">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-hover">
            <Link to="/over">Over</Link>
          </li>
          <li className="navbar-hover">
            <Link to="/agenda">Agenda</Link>
          </li>
          <li className="expand">
            <Link to="/haarlemsemuren/informatie">Haarlemse Muren</Link>
            <div className="expand-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
              <div className="foldout">
                <ul>
                  <li>
                    <Link to="/haarlemsemuren/informatie">Informatie</Link>
                  </li>
                  <li>
                    <Link to="/haarlemsemuren/muren">Muren</Link>
                  </li>
                  <li>
                    <Link to="/haarlemsemuren/insturen">Insturen</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
