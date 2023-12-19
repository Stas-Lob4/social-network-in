const initialState: DialogsType = {
    dialogs: [],
    messages: []
}

export const dialogReducer = (state: DialogsType = initialState, action: ActionDialogReducerType): DialogsType => {
    switch (action.type) {
        case 'DELETE-MESSAGE':
            return {...state, messages: state.messages.filter(m => m.id !== action.messageId)}
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return state
        case 'ADD-MESSAGE':
            console.log('Tita')
            return {...state, messages: [...state.messages, action.message]}
        case 'SET-MESSAGES':
            return {...state, messages: action.messages}
        case 'SET-DIALOGS':
            return {...state, dialogs: action.dialogs}
        default:
            return state
    }
}


type DeleteMessageActionType = ReturnType<typeof deleteMessageAC>
export const deleteMessageAC = (messageId: string) => {
    return {type: 'DELETE-MESSAGE', messageId} as const
}

type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (userId: number, text: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', text, userId} as const
}

type AddMessageActionType = ReturnType<typeof addMessageAC>
export const addMessageAC = (message: MessageType) => {
    return {type: 'ADD-MESSAGE', message} as const
}
type SetDialogsActionType = ReturnType<typeof setDialogsAC>
export const setDialogsAC = (dialogs: DialogType[]) => {
    return {type: 'SET-DIALOGS', dialogs} as const
}
type SetMessagesActionType = ReturnType<typeof setMessagesAC>
export const setMessagesAC = (messages: MessageType[]) => {
    return {type: 'SET-MESSAGES', messages} as const
}

export type ActionDialogReducerType = DeleteMessageActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType
    | SetDialogsActionType
    | SetMessagesActionType


export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
};
export type PhotosUserType = {
    small: string;
    large: string;
}
export type DialogType = {
    id: number;
    userName: string;
    hasNewMessages: boolean;
    lastDialogActivityDate: string;
    lastUserActivityDate: string;
    newMessagesCount: number;
    photos: PhotosUserType;
}

export type MessageType = {
    id: string;
    body: string;
    translatedBody?: any;
    addedAt: string;
    senderId: number;
    senderName: string;
    recipientId: number;
    viewed: boolean;
}
