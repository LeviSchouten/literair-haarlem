import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import NavbarComponent from './components/navbar/navbar.component.jsx';

import Home from './pages/home/home.page.jsx';
import Over from './pages/over/over.page.jsx';
import Agenda from './pages/agenda/agenda.page.jsx';

import './App.scss';
import Evenement from './pages/evenement/evenement.page.jsx';
import Informatie from './pages/informatie/informatie.page.jsx';
import Gedichten from './pages/gedichten/gedichten.page.jsx';
import Gedicht from './pages/gedicht/gedicht.page.jsx';
import Insturen from './pages/insturen/insturen.page.jsx';
import Muren from './pages/muren/muren.page.jsx';
import Muur from './pages/muur/muur.page.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavbarComponent />
        <div className="content">
          <Switch className="linked-content">
            <Route exact path="/" component={Home} />
            <Route path="/over" component={Over} />
            <Route exact path="/agenda" component={Agenda} />
            <Route path="/agenda/:id" component={Evenement} />
            <Route
              exact
              path="/haarlemsemuren/informatie"
              component={Informatie}
            />
            <Route
              exact
              path="/haarlemsemuren/gedichten"
              component={Gedichten}
            />
            <Route exact path="/haarlemsemuren/muren" component={Muren} />
            <Route exact path="/haarlemsemuren/insturen" component={Insturen} />
            <Route
              exact
              path="/haarlemsemuren/gedichten/:id"
              component={Gedicht}
            />
            <Route exact path="/haarlemsemuren/muren/:id" component={Muur} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
