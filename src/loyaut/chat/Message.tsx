import React from 'react';
import {ChatMessageType} from '../../api/chatApi';
import {useSelector} from 'react-redux';
import {AppRootStateType, useAppSelector} from '../../app/store';
import {
    MessageBoxText,
    MessageItem,
    MyMessageItem, MyTextMessage,
    MyUserNameToMessage, TextMessage,
    UserNameToMessage,
    UserPhotoToMessage
} from './ChatStyled';
import users_logo from '../../assets/img/user-icon.jpg'

export const Message: React.FC<{ message: ChatMessageType, key: number }> = React.memo(({message, key}) => {
    const userId = useSelector<AppRootStateType, number | null>(state => state.authReducer.userId)
    let messages = useAppSelector(state => state.chatReducer.messages)

    if (message.userId === userId) {
        return <MyMessageItem key={key}>
            <UserPhotoToMessage src={message.photo}/>
            <MessageBoxText>
                <MyUserNameToMessage>{message.userName}</MyUserNameToMessage>
                <MyTextMessage>{message.message}</MyTextMessage>
            </MessageBoxText>
        </MyMessageItem>
    }

    return <MessageItem key={key}>
        <UserPhotoToMessage src={message.photo ? message.photo : users_logo}/>
        <MessageBoxText>
            <UserNameToMessage>{message.userName}</UserNameToMessage>
            <TextMessage>{message.message}</TextMessage>
        </MessageBoxText>
    </MessageItem>
})