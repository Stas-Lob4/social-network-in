import React, {useEffect} from 'react';
import {DialogInputBox, DialogItem, DialogList, DialogStyled} from './DialogStyled';
import {TextareaBlock} from '../../../component/TextareaBlock';
import {useAppSelector} from '../../../app/store';
import {dialogsThunks} from '../../../redux/thunks/dialogsThunk';
import {HashLoader} from 'react-spinners';
import {ErrorTitle} from '../../../component/ErrorTitle';
import {useActions} from '../../../hooks/useActions';


type PropsType = {
    addNewMessage: (userId: number, text: string) => void
    deleteMessage: (messageId: string) => void
    id: number
}
export const Dialog: React.FC<PropsType> = React.memo(({id, addNewMessage, deleteMessage}) => {
    const messages = useAppSelector(state => state.dialogReducer.messages)

    const addMessage = (text: string) => {
        if (text.trim() !== '') {
            addNewMessage(id, text)
        }
    }

    return <DialogStyled>
        <DialogList>
            {messages.length === 0
                ? <ErrorTitle title={'NOT MESSAGES'}/>
                : messages.map((mes) => <DialogItem key={mes.id}>{mes.body}
                    <button onClick={() => deleteMessage(mes.id)}>X</button>
                </DialogItem>)
            }
        </DialogList>
        <DialogInputBox>
            <TextareaBlock onClick={addMessage}/>
        </DialogInputBox>
    </DialogStyled>
})