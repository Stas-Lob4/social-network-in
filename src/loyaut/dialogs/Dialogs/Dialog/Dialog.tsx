import React, {ChangeEvent, useEffect, useState} from 'react';
import {DialogInputBox, DialogItem, DialogList, DialogStyled} from './DialogStyled';
import {TextareaBlock} from '../../../../component/TextareaBlock';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppRootStateType} from '../../../../redux/store';
import {setMessagesTC} from '../../../../redux/thunks/dialogsThunk';
import {RequestStatusType} from '../../../../redux/reducers/appReducer';
import {HashLoader} from 'react-spinners';
import {ErrorTitle} from '../../../../component/ErrorTitle';
import {MessageType} from '../../../../redux/reducers/dialogReducer';


type PropsType = {
    updateNewMessageText: (userId: number, text: string) => void
    addNewMessage: (userId: number, text: string) => void
    deleteMessage: (messageId: string) => void
    id: number
}
export const Dialog: React.FC<PropsType> = ({id, updateNewMessageText, addNewMessage, deleteMessage}) => {

    const dispatch = useDispatch<AppDispatch>()
    const messages = useSelector<AppRootStateType, MessageType[]>(state => state.dialogReducer.messages)
    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.appReducer.status)


    useEffect(() => {
        dispatch(setMessagesTC(id))
    }, [id]);


    const deleteMessageHandler = (messageId: string) => {
        deleteMessage(messageId)
    }
    const addMessage = (text: string) => {
        if (text.trim() !== '') {
            addNewMessage(id, text)
        }
    }


    if (appStatus === 'loading') {
        return <HashLoader/>
    }

    return <DialogStyled>
        <DialogList>
            {messages.length === 0
                ? <ErrorTitle title={'NOT MESSAGES'}/>
                : messages.map((mes) => <DialogItem key={mes.id}>{mes.body}
                    <button onClick={()=>deleteMessageHandler(mes.id)}>X</button>
                </DialogItem>)
            }
        </DialogList>
        <DialogInputBox>
            <TextareaBlock onClick={addMessage}/>

        </DialogInputBox>
    </DialogStyled>
}