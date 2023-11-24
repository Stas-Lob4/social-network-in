import React, {ChangeEvent} from 'react';
import {DialogList} from './Dialogs';
import {DialogPropsType} from '../DialogsContainer';


export const Dialog: React.FC<DialogPropsType & {id: string}> = ({id, deleteMessage, updateNewMessageText, addNewMessage, users}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value
        if(newMessageText.trim() !== ''){
            updateNewMessageText(id, newMessageText)
        }
    }
    const deleteMessageHandler = (idMessage: string) => {
        deleteMessage(id, idMessage)
    }
    const addMessage = () => {
        addNewMessage(id)
    }

    const blockDialogs = users[id].message.map( mes => {
            return<li key={mes.id}>
                {mes.text}<button onClick={()=>deleteMessageHandler(mes.id)}>x</button>
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