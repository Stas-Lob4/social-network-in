import React, { FC } from "react"
import styled from "styled-components"

type PropsType = {
  disabled?: boolean
  children?: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset" | undefined
} & ButtonStyledPropsType

export const Button: FC<PropsType> = ({ children, onClick, color, disabled, type }) => {
  return (
    <ButtonStyled type={type} disabled={disabled} color={color} onClick={onClick ? () => onClick() : () => {}}>
      {children}
    </ButtonStyled>
  )
}

type ButtonStyledPropsType = {
  color?: "red" | "green"
}
const ButtonStyled = styled.button<ButtonStyledPropsType>`
  width: 150px;
  height: 30px;
  color: white;
  background: none;
  border: 1px solid seashell;
  border-radius: 30px;

  &:hover {
    background-color: ${(props) => props.color || "grey"};
    border: 1px solid ${(props) => props.color || "grey"};
  }

  &:hover:disabled {
    opacity: 0.2;
  }
`
