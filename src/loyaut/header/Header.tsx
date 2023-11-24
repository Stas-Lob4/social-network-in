import React from 'react';
import {FlexWrap} from '../../component/FlexWrap';
import Logo from '../../assets/svg/logo.svg'
import {BoxLogo, ButtonStyled, HeaderStyled, Image, LoginBlock} from './HeaderStyled';
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean
}
export const Header:React.FC<PropsType> = ({isAuth}) => {
    return (
        <HeaderStyled>
                <FlexWrap direction={'row'} justify={'space-between'} align={'center'} height={"100%"}>
                    <BoxLogo to={"/"}>
                        <Image src={Logo} height={'30px'} width={'30px'}/>
                        <a>Samurai-Network</a>
                    </BoxLogo>
                    <LoginBlock>
                        { isAuth ? <NavLink to={'./login'}><ButtonStyled>Log out</ButtonStyled></NavLink>
                                 : <NavLink to={'./login'}><ButtonStyled>Sign in</ButtonStyled></NavLink>
                        }
                    </LoginBlock>
                </FlexWrap>
        </HeaderStyled>
    )
}



