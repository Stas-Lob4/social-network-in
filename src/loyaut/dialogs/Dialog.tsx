import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import {NavLink} from 'react-router-dom';
import {DialogList, DialogsList} from './Dialogs';
import {ActionType,  UsersType} from '../../redux/state';
import {addMessageAC, deleteMessageAC, updateNewMessageText} from '../../redux/dialog-reducer';

export type DialogPropsType = {
    users: UsersType
    onClickCallBack: (id: string) => void
}
export const DialogItem: React.FC<DialogPropsType> = ({users, onClickCallBack}) => {
    const onClickHandler = (id: string) => onClickCallBack(id)
    const blockUsers = Object.keys(users).map(
        userId => {
            const user = users[userId]
            return <NavLink className={({isActive}) => isActive ? s.active :  ''} key={userId} to={`/dialogs/${userId}`} onClick={() => onClickHandler(userId)}>{user.name}</NavLink>
        })
    return <DialogsList>{blockUsers}</DialogsList>
}
export const Dialog: React.FC<{ users: UsersType, id: string , dispatch: (action: ActionType) => void}> =
    ({users, id, dispatch}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value
        if(newMessageText.trim() !== ''){
            dispatch(updateNewMessageText(id, newMessageText))
        }
    }
    const deleteMessage = (idMessage: string) => {
        dispatch(deleteMessageAC(id,idMessage))
        console.log(id, idMessage)
    }
    const addMessage = () => {
        dispatch(addMessageAC(id))
        console.log("Click Add message")
    }

    const blockDialogs = users[id].message.map( mes => {
            return<li key={mes.id}>
                {mes.text}<button onClick={()=>deleteMessage(mes.id)}>x</button>
            </li>
        }
    )

    return <div>
        <DialogList>
            {blockDialogs}
        </DialogList>
        <div>
            <textarea value={users[id].newMessage} onChange={onChangeHandler}/>
            <button onClick={addMessage}>Add message</button>
        </div>
    </div>
}