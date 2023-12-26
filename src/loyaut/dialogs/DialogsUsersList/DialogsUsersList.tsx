import React from 'react';
import {DialogsUsersListStyled, NavLinkStyled} from './DialogsUsersListStyled';
import {useAppSelector} from '../../../app/store';

export type DialogListPropsType = {
    onClickCallBack: (id: number) => void
}

export const DialogsUsersList: React.FC<DialogListPropsType> = ({onClickCallBack}) => {
    const dialogs = useAppSelector(state => state.dialogReducer.dialogs)
    const onClickHandler = (id: number) => onClickCallBack(id)
    const blockUsers = dialogs.map(dialog => {
        return <NavLinkStyled key={dialog.id} to={`/dialogs/${dialog.id}`}
                        onClick={() => onClickHandler(dialog.id)}>{dialog.userName}</NavLinkStyled>
    })

    return <DialogsUsersListStyled>{blockUsers}</DialogsUsersListStyled>
}