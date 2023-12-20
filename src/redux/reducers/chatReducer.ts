import {chatApi, ChatMessageType, ChatStatusType} from '../../api/chatApi';
import {AppDispatch} from '../store';
import {Dispatch} from 'redux';
import {v1} from 'uuid';


const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as ChatStatusType
}
type InitialStateType = typeof initialState
export const chatReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case 'MESSAGES-RECEIVED':
           return state.messages !== actions.messages
               ? {...state,
                   messages: [...state.messages, ...actions.messages.map( m => ({...m, id: v1() }))]
                        .filter((m, index, array) => index >= array.length - 100)}
               : state
        case 'STATUS-CHANGED':
            return {
                ...state,
                status: actions.status
            }
        default:
            return state
    }
}



type ActionsType = MessagesReceivedActionType | StatusChangedActionType


type MessagesReceivedActionType = ReturnType<typeof messagesReceived>
export const messagesReceived = (messages: ChatMessageType[]) => {
    return {
        type: 'MESSAGES-RECEIVED', messages
    } as const
}
type StatusChangedActionType = ReturnType<typeof statusChanged>
export const statusChanged = (status: ChatStatusType) => {
    return {
        type: 'STATUS-CHANGED', status
    } as const
}

let _newMessageHandler: ((messages: ChatMessageType[])=>void)|null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if(_newMessageHandler === null){
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: ChatStatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = () => async (dispatch: AppDispatch) => {
    chatApi.start()
    chatApi.subscribe('messages-received',newMessageHandlerCreator(dispatch))
    chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = () => async (dispatch: AppDispatch) => {
    chatApi.stop()
    chatApi.unsubscribe('messages-received',newMessageHandlerCreator(dispatch))
    chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const sendMessage = (message: string) => async (dispatch: AppDispatch) => {
    chatApi.sendMessage(message)
}