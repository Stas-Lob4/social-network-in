import {chatApi, ChatMessageType, ChatStatusType} from '../../api/chatApi';
import {AppDispatch} from '../../app/store';
import {Dispatch} from 'redux';
import {v1} from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as ChatStatusType
}


const slice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        messagesReceived: (state, action: PayloadAction<{ messages: ChatMessageType[] }>) => {
            state.messages = [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))]
                    .filter((m, index, array) => index >= array.length - 100)
        },
        statusChanged: (state, action: PayloadAction<{ status: ChatStatusType }>) => {
            state.status = action.payload.status
        },
        clearMessages: (state) => {
            state.messages = []
        }
    }
})

export const chatReducer = slice.reducer
export const chatActions = slice.actions

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(chatActions.messagesReceived({messages}))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: ChatStatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(chatActions.statusChanged({status}))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = () => async (dispatch: AppDispatch) => {
    chatApi.start()
    chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = () => async (dispatch: AppDispatch) => {
    chatApi.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatApi.stop()
}

export const sendMessage = (message: string) => async (dispatch: AppDispatch) => {
    chatApi.sendMessage(message)
}