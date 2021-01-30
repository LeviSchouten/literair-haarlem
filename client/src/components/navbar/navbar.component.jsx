import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import './navbar.component.scss';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className="navbar">
      <NavbarBrand href="/" className="title">
        Literair Haarlem
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
          <NavItem className="item">
            <NavLink href="/">
              <span className="item">Home</span>
            </NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink href="/over">
              <span className="item">Over</span>
            </NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink href="/agenda">
              <span className="item">Agenda</span>
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="item">
            <DropdownToggle nav caret>
              <span className="item">Haarlemse Muren</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={Link} to="/haarlemsemuren/informatie">
                <span className="item">Informatie</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/haarlemsemuren/gedichten">
                <span className="item">Gedichten</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/haarlemsemuren/muren">
                <span className="item">Muren</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/haarlemsemuren/insturen">
                <span className="item">Insturen</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
