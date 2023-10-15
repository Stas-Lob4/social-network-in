import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Dialog, DialogItem, DialogPropsType} from './Dialog';
import {ActionType, initValueMessage, UsersType} from '../../redux/state';


type DialogsPropsType = {
    users: UsersType
    dispatch: (action: ActionType) => void
}
export const Dialogs: FC<DialogsPropsType> = ({users, dispatch}) => {
    const [userMessageId, setUserMessageId] = useState(initValueMessage);
    const onClickHandler = (id: string) => setUserMessageId(id)
    return <DialogsStyled>
        <DialogItem users={users} onClickCallBack={onClickHandler}/>
        <Dialog users={users} id={userMessageId} dispatch={dispatch}/>
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
  justify-content: space-between;
  gap: 30px;
  background-color: dimgrey;
  width: 95%;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
`

export const DialogList = styled.ul`
  background-color: #9b9a9a;
  width: 70vh;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  li {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
  }
`