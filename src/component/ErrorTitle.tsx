import React from 'react';
import styled from 'styled-components';


type ErrorTitlePropsType = {
    title: string
}
export const ErrorTitle: React.FC<ErrorTitlePropsType> = ({title}) => {
    return (
        <ErrorTitleBoxStyled>
            <ErrorTitleStyled>{title}</ErrorTitleStyled>
        </ErrorTitleBoxStyled>
    );
};

const ErrorTitleBoxStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ErrorTitleStyled = styled.h2`
    font-size: 20px;
`