
import {v1} from 'uuid';

export const initValueMessage = v1()

export type UsersType = {
    [id: string]: {
        name: string
        message: MessageType[]
        newMessage: string
    }
}
export type MessageType = {
    id: string
    text: string
}

const initialState: UsersType = {
    [initValueMessage]: {
        name: 'Stas',
        message: [
            {id: v1(), text: 'Hello Stas'},
            {id: v1(), text: 'Hi'},
            {
                id: v1(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero'
            }],
        newMessage: ''
    },
    [v1()]: {
        name: 'Petia',
        message: [
            {id: v1(), text: 'Hello Petia'},
            {id: v1(), text: 'Hi'},
            {
                id: v1(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero'
            }
        ],
        newMessage: ''
    },
    [v1()]: {
        name: 'Vasia',
        message: [
            {id: v1(), text: 'Hello Vasia'},
            {id: v1(), text: 'Hi'},
            {
                id: v1(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero'
            }
        ],
        newMessage: ''
    },
    [v1()]: {
        name: 'Kateryna',
        message: [
            {id: v1(), text: 'Hello Kateryna'},
            {id: v1(), text: 'Hi'},
            {
                id: v1(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero'
            }
        ],
        newMessage: ''
    },
    [v1()]: {
        name: 'Yana',
        message: [
            {id: v1(), text: 'Hello Yana'},
            {id: v1(), text: 'Hi'},
            {
                id: v1(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero'
            }
        ],
        newMessage: ''
    },
}

export const dialogReducer = (state: UsersType = initialState, action: ActionDialogReducerType): UsersType => {
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
