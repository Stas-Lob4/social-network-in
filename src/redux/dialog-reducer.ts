import {ActionType, UsersType} from './state';
import {v1} from 'uuid';


export const dialogReducer = (state: UsersType, action: ActionType) => {
    switch (action.type) {
        case 'DELETE-MESSAGE':
            return {
                ...state, [action.userId]: {
                    ...state[action.userId],
                    message: state[action.userId].message.filter(mes => mes.id !== action.idMessage)
                }
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, [action.userId]: {...state[action.userId], newMessage: action.text}}
        case 'ADD-MESSAGE':
            return {
                ...state, [action.userId]: {
                    ...state[action.userId],
                    message: [...state[action.userId].message,
                        {id: v1(), text: state[action.userId].newMessage}],
                    newMessage: ''
                },
            }
        default:
            return state
    }
}


export type ActionDialogReducerType = DeleteMessageActionType | AddMessageActionType | UpdateNewMessageTextActionType

type DeleteMessageActionType = ReturnType<typeof deleteMessageAC>
export const deleteMessageAC = (userId: string, idMessage: string) => {
    console.log('Есть вход')
    return {type: 'DELETE-MESSAGE', idMessage, userId} as const
}

type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageText>
export const updateNewMessageText = (userId: string,text: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', text, userId} as const
}

type AddMessageActionType = ReturnType<typeof addMessageAC>
export const addMessageAC = (userId: string) => {
    return {type: 'ADD-MESSAGE',userId} as const
}
