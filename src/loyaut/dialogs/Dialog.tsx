import React from 'react';
import {Link} from 'react-router-dom';
import {DialogList, DialogsList} from './Dialogs';
import {UsersType} from '../../redux/state';

export type DialogPropsType = {
    users: UsersType
    onClickCallBack: (id: string) => void
}
export const DialogItem: React.FC<DialogPropsType> = ({users, onClickCallBack}) => {
    const onClickHandler = (id: string) => onClickCallBack(id)
    const mapUsers = users.map(u =>
        <Link key={u.id} to={`/dialogs/${u.id}`} onClick={() => onClickHandler(u.id)}>{u.name}</Link>
    )
    return <DialogsList>{mapUsers}</DialogsList>
}
export const Dialog: React.FC<{ users: UsersType, id: string }> = ({users, id}) => {
    const filterDialogs = users.filter(f => f.id === id)
    const mapDialog = filterDialogs.map(m=> m.message.map(mes => <li>{mes}</li>))
    return <DialogList>
        {mapDialog}
    </DialogList>
}