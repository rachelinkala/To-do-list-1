import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
  </nav>
)

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

export default NavBar;
