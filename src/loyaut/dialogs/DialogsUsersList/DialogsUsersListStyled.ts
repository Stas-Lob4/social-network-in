import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


export const DialogsUsersListStyled = styled.nav`
    width: 40%;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden;
    background: #39625f;
    
    a {
        text-decoration: none;
        color: white;
        border: 1px solid white;
        border-radius: 10px;
        padding: 2px 5px 2px 10px;
        font-size: 14px;
    }
    a:hover {
        color: #141e18;
        border: 1px solid #141e18;
    }
    a:active {
        
    }
`

export const NavLinkStyled = styled(NavLink)`
    
    &.active{
        color: #141e18;
        border: 1px solid #141e18;
    }
`