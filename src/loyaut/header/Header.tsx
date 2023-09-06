import React from 'react';
import {FlexWrap} from '../../component/FlexWrap';
import Logo from '../../assets/svg/logo.svg'
import {BoxLogo, ButtonStyled, HeaderStyled, Image} from './HeaderStyled';

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



