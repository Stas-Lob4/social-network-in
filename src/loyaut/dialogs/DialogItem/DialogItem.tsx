import {UsersType} from '../../../redux/dialog-reducer';
import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs/Dialog.module.css';
import {DialogsList} from '../Dialogs/Dialogs';

export type DialogItemPropsType = {
    users: UsersType
    onClickCallBack: (id: string) => void
}

export const DialogItem: React.FC<DialogItemPropsType> = ({users, onClickCallBack}) => {
    const onClickHandler = (id: string) => onClickCallBack(id)
    const blockUsers = Object.keys(users).map(
        userId => {
            const user = users[userId]
            return <NavLink className={({isActive}) => isActive ? s.active :  ''} key={userId} to={`/dialogs/${userId}`} onClick={() => onClickHandler(userId)}>{user.name}</NavLink>
        })
    return <DialogsList>{blockUsers}</DialogsList>
}