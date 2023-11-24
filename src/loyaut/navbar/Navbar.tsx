import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <NavbarStyled>
                <li><NavLink to={"/profile/:userId"}>My profile</NavLink></li>
                <li><NavLink to={"/dialogs"}>Dialogs</NavLink></li>
                <li><Link to={"/friends"}>Friends</Link></li>
                <li><Link to={"/#"}>Groups</Link></li>
                <li><Link to={"/#"}>Settings</Link></li>
        </NavbarStyled>
    );
};

export const NavbarStyled = styled.ul`
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li > a {
    color: white;
  }
`