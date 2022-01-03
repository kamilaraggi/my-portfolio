import React from 'react';
import M from 'materialize-css';
import { Navbar , NavItem , Icon } from 'react-materialize';

function MenuBar() {
 return( 
  <Navbar
    className='navbar' 
    alignLinks="right"
    brand={<a className="brand-logo">Kamila Raggi</a>}
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true
    }}
  >
    <NavItem>
      About Me
    </NavItem>
    <NavItem>
      Contact
    </NavItem>
    <NavItem>
        Projects
    </NavItem>
    <NavItem>
        Resume
    </NavItem>
  </Navbar>)
}


export default MenuBar;
