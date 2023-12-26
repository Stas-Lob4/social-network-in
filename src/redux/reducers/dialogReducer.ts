import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {dialogsThunks} from '../thunks/dialogsThunk';

const initialState: DialogsType = {
    dialogs: [],
    messages: []
}


const slice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        deleteMessage: (state, action: PayloadAction<{messageId: string}>) => {
            state.messages = state.messages.filter(m=> m.id !== action.payload.messageId)
        },
        addNewMessage: (state, action: PayloadAction<{message: MessageType}>) => {
            state.messages = [...state.messages, action.payload.message]
        },
        setMessages: (state, action: PayloadAction<{messages: MessageType[]}>) => {
            state.messages = action.payload.messages
        },
        setDialogs: (state, action: PayloadAction<{dialogs: DialogType[]}>) => {
            state.dialogs = action.payload.dialogs
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(dialogsThunks.fetchMessages.fulfilled, (state, action) => {
                state.messages = action.payload.messages
            })
            .addCase(dialogsThunks.fetchDialogs.fulfilled, (state, action) => {
                state.dialogs = action.payload.dialogs
            })
            .addCase(dialogsThunks.addMessage.fulfilled, (state, action) => {
                state.messages = [...state.messages,action.payload.message]
            })
            .addCase(dialogsThunks.deleteMessage.fulfilled, (state, action) => {
                state.messages = state.messages.filter(m=> m.id !== action.payload.messageId)
            })
    }
})
export const dialogReducer = slice.reducer
export const dialogActions = slice.actions



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
