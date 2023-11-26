import React from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import '../styles/style.scss';


const Menu = () =>{
    const { pathname } = useLocation();
    console.log('Current Path:', pathname);
    return(
      <nav className='navbar'>
      <ul>
        <li>
          <NavLink to="/" className={pathname === '/home' ? 'active' : ''}>
            Demo Reel
          </NavLink>
        </li>
        <li>
          <NavLink to="/personal-work" className={pathname === '/personal-work' ? 'active' : ''}>
            Personal Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={pathname === '/about-me' ? 'active' : ''}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default Menu