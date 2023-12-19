import React from 'react';
import { NavLink} from 'react-router-dom';
import {NavbarLinkStyled, NavbarStyled} from './NavbarStyled';

export const Navbar = () => {
    return (
        <NavbarStyled>
                <NavbarLinkStyled to={"/profile/:userId"}>My profile</NavbarLinkStyled>
                <NavbarLinkStyled to={"/dialogs"}>Dialogs</NavbarLinkStyled>
                <NavbarLinkStyled to={"/friends"}>Friends</NavbarLinkStyled>
                <NavbarLinkStyled to={"/#"}>Groups</NavbarLinkStyled>
                <NavbarLinkStyled to={"/#"}>Settings</NavbarLinkStyled>
        </NavbarStyled>
    );
};

