import React from "react"
import { NavLink } from "react-router-dom"
import { NavbarLinkStyled, NavbarStyled } from "./NavbarStyled"

export const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarLinkStyled to={"/profile"}>My profile 😁</NavbarLinkStyled>
      <NavbarLinkStyled to={"/dialogs"}>Dialogs 💬</NavbarLinkStyled>
      <NavbarLinkStyled to={"/users"}>Users ❤️</NavbarLinkStyled>
      <NavbarLinkStyled to={"/chat"}>Samurai-chat ⚔️</NavbarLinkStyled>
    </NavbarStyled>
  )
}
