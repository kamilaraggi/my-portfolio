import React from "react";
import M from 'materialize-css'
import { Navbar , Icon , NavItem  } from "react-materialize";


function MenuBar(props) {
    const {
        handlePageChange,
        currentPage,
    } = props;
    const tabs = ['About Me', 'Projects' , 'Resume', 'Contact'];
return (
    <Navbar
    alignLinks="right"
    brand={<a className="brand-logo" href="#">Kamila Raggi</a>}
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
  <ul className="nav nav-tabs">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            // Whenever a tab is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => handlePageChange(tab)}
                            className={
                                'nav-link' + (currentPage === tab ? ' active' : '')
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
            </Navbar>
);
}

export default MenuBar;