import React from 'react';
import styled from 'styled-components';
import {Container} from '../../component/Container';
import {FlexWrap} from '../../component/FlexWrap';
import {Button} from '../../component/Button';
import Logo from '../../assets/svg/logo.svg'
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <HeaderStyled>
                <FlexWrap direction={'row'} justify={'space-between'} align={'center'} height={"100%"}>
                    <BoxLogo to={"/"}>
                        <Image src={Logo} height={'30px'} width={'30px'}/>
                        <a>Samurai-Network</a>
                    </BoxLogo>
                    <ButtonStyled>Sign-In</ButtonStyled>
                </FlexWrap>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
  height: 50px;
  align-content: center;
`
export const BoxLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
`

export const Image = styled.img`
  height: 30px;
  margin: auto 10px;
`
export const ButtonStyled = styled.button`
  margin-right: 10px;
  height: 30px;
  width: 100px;
  background: transparent;
  border-radius: 5px;
  border: 1px solid red;
  color: white;
  &:hover {
    background: red;
    text-decoration-line: underline;
  }
`


