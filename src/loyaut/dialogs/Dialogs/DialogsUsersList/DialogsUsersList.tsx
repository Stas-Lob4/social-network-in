import React from 'react';
import {DialogsUsersListStyled, NavLinkStyled} from './DialogsUsersListStyled';
import {DialogType} from '../../../../redux/reducers/dialogReducer';

export type DialogListPropsType = {
    dialogs: DialogType[]
    onClickCallBack: (id: number) => void
}

export const DialogsUsersList: React.FC<DialogListPropsType> = ({dialogs, onClickCallBack}) => {
    const onClickHandler = (id: number) => onClickCallBack(id)
    const blockUsers = dialogs.map(dialog => {
        return <NavLinkStyled key={dialog.id} to={`/dialogs/${dialog.id}`}
                        onClick={() => onClickHandler(dialog.id)}>{dialog.userName}</NavLinkStyled>
    })

    return <DialogsUsersListStyled>{blockUsers}</DialogsUsersListStyled>
}