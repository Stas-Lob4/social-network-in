import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <NavbarStyled>
            <li><Link to={"/"}>My profile</Link></li>
            {/*<li><Link to={"/#"}>Message</Link></li>*/}
            {/*<li><Link to={"/#"}>Friends</Link></li>*/}
            {/*<li><Link to={"/#"}>My profile</Link></li>*/}
        </NavbarStyled>
    );
};

export const NavbarStyled = styled.ul`
  
`