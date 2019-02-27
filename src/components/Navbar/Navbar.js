import React from 'react';
import { NavStyled, NavLogo, NavItem } from './Navbar.styled';


const Navbar = () => {
  return (
    <NavStyled>
      <NavLogo to="/">
        LOGO
      </NavLogo>
      <div>
        <NavItem to="/" activeClassName="active">
          home
        </NavItem>
        <NavItem to="/products" activeClassName="active">
          products
        </NavItem>
        <NavItem to="/about" activeClassName="active">
          about
        </NavItem>
        <NavItem to="/contact" activeClassName="active">
          contact
        </NavItem>
      </div>
    </NavStyled>
  )
}

export default Navbar;


