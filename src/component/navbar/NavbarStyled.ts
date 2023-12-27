import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const NavbarStyled = styled.nav`
  margin-top: 30px;
  margin-left: 20px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
  }
`

export const NavbarLinkStyled = styled(NavLink)`
  color: white;

  &:hover {
    text-decoration: underline;
    color: #c53a3a;
  }

  &.active {
    color: #c53a3a;
  }
`
