import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <NavbarStyled>
                <li><Link to={"/"}>My profile</Link></li>
                <li><Link to={"/message"}>Message</Link></li>
                <li><Link to={"/friend"}>Friends</Link></li>
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