import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <FooterStyled>
            <h2>Samurai Social Network ©2023 Created by Stanislav Lobchuk and IT-KAMASUTRA</h2>
        </FooterStyled>
    );
};

export const FooterStyled = styled.div`
    h2{
        font-size: 13px;
        line-height: 1;
    }
`