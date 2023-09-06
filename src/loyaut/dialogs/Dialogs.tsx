import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Dialogs = () => {
  return<DialogsStyled>
    <DialogsList>
      <Link to={"/dialogs/1"}>() Stas</Link>
      <Link to={"/dialogs/2"}>() Petia</Link>
      <Link to={"/dialogs/3"}>() Vasia</Link>
      <Link to={"/dialogs/4"}>() Kateryna</Link>
      <Link to={"/dialogs/5"}>() Yana</Link>
    </DialogsList>
    <Dialog>
      <li>Hello</li>
      <li>Hi</li>
      <li>By</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet architecto commodi debitis dolore doloremque id illo modi mollitia, necessitatibus quaerat quam, quis repellendus tempore! Inventore nesciunt officiis pariatur.</li>
    </Dialog>
  </DialogsStyled>
}


export const DialogsList = styled.div`
  display: flex;
  flex-direction: column;
  
  
  
  a {
    text-decoration: none;
    color: black;
  }
`
export const DialogsStyled = styled.div`
  display: flex;
  justify-content:space-between;
  gap: 30px;
  background-color: dimgrey;
  width: 95%;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
`

export const Dialog = styled.ul`
  background-color: #9b9a9a;
  width: 70%;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  li {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
  }
`