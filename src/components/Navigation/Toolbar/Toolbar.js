import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import  { FaBold } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {withRouter} from 'react-router';
import Auxi from '../../../hoc/Auxi/Auxi';

import NavLink from '../NavLink/NavLink';

const Example = (props) => {
  const { location } = props;

  return (
    <Auxi>
      <Navbar collapseOnSelect  bg="dark" variant="dark" fixed="top"  expand="lg">
      <Navbar.Brand href="/">
      <IconContext.Provider value={{size: "1.5em"}}>
          <FaBold />
      </IconContext.Provider>log
     </Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="mr-auto">
              <NavLink link="/main" name="Main page" />
              <NavLink link="/my-blog" name="My blog" />
              <NavLink link="/about-me" name="About me" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Auxi>
  );
}

export default withRouter(Example);


//
// <NavDropdown title="Language" id="basic-nav-dropdown">
//   <NavDropdown.Item href="#action/3.1">UZ</NavDropdown.Item>
//   <NavDropdown.Item href="#action/3.2">RU</NavDropdown.Item>
//   <NavDropdown.Item href="#action/3.3">ENG</NavDropdown.Item>
//   <NavDropdown.Divider />
//   <NavDropdown.Item href="#action/3.4">feeling lucky?</NavDropdown.Item>
// </NavDropdown>
