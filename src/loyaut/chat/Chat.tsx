import React, {useEffect} from 'react';
import {TextareaBlock} from '../../component/TextareaBlock';
import {HashLoader} from 'react-spinners';
import {ChatStatusType} from '../../api/chatApi';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/reducers/chatReducer';
import {AppRootStateType} from '../../redux/store';
import {Messages} from './Messages';
import {ChatStyled, InputMessageContainer, LoaderContainer} from './ChatStyled';


export const Chat = () => {
    const status = useSelector<AppRootStateType, ChatStatusType>(state => state.chatReducer.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, []);

    const sendMessageHandler = (message: string) => {
        if (message.trim() !== '') {
            dispatch(sendMessage(message))
        }
    }

    if (status === 'pending') {
        return <ChatStyled>
            <LoaderContainer>
                <HashLoader size={250}/>
            </LoaderContainer>
        </ChatStyled>
    }
    if (status === 'error') {
        return <ChatStyled>
            {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        </ChatStyled>
    }

    return (
        <ChatStyled>
            <Messages/>
            <InputMessageContainer>
                <TextareaBlock disabled={status !== 'ready'} onClick={sendMessageHandler}/>
            </InputMessageContainer>
        </ChatStyled>
    );
};


