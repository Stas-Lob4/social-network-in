import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const UserItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 140px;

  a {
    img {
      width: 140px;
      height: 140px;
      border-radius: 10px;
    }
  }
`

export const UserItemNavLinkStyled = styled(NavLink)`
  width: 140px;
  height: 140px;
`

export const UserItemImageStyled = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 10px;
`
export const UserNameStyled = styled.h3`
  font-size: 1em;
`
