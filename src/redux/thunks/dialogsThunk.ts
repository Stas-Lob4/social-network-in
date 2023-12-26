import {dialogsApi} from '../../api/dialogsApi';
import {createAppAsyncThunk, handleServerAppError, thunkTryCatch} from '../../utils';
import {DialogType, MessageType} from '../reducers/dialogReducer';
import {ResultCode} from '../../enums';


const fetchDialogs = createAppAsyncThunk<{ dialogs: DialogType[] }, void>(
    'dialog/fetchDialogs',
    async (_, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const res = await dialogsApi.getDialog()
            return {dialogs: res.data}
        })
    },
)

const fetchMessages = createAppAsyncThunk<{ messages: MessageType[] }, number>(
    'dialog/fetchMessages',
    async (id, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const res = await dialogsApi.getMessages(id)
            return {messages: res.data.items}
        })
    },
)

const addMessage = createAppAsyncThunk<{ message: MessageType }, { id: number, text: string }>(
    'dialog/addMessage',
    async (data, thunkAPI) => {
        const {dispatch, rejectWithValue} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            const res = await dialogsApi.addMessage(data.id, {body: data.text})
            if (res.data.resultCode === ResultCode.Success) {
                const message = {
                    id: res.data.data.message.id,
                    body: res.data.data.message.body,
                    translatedBody: res.data.data.message.translatedBody,
                    addedAt: res.data.data.message.addedAt,
                    senderId: res.data.data.message.senderId,
                    senderName: res.data.data.message.senderName,
                    recipientId: res.data.data.message.recipientId,
                    viewed: false,
                }
                return {message}
            } else {
                handleServerAppError(res.data, dispatch)
                return rejectWithValue(null)
            }
        })
    },
)

const deleteMessage = createAppAsyncThunk<{messageId: string}, string>(
    'dialog/deleteMessage',
    async (messageId, thunkAPI) => {
        const {dispatch, rejectWithValue} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            const res = await dialogsApi.deleteMessage(messageId)
            if (res.data.resultCode === ResultCode.Success) {
                return {messageId}
            } else {
                handleServerAppError(res.data, dispatch)
                return rejectWithValue(null)
            }
        })
    },
)

export const dialogsThunks = {fetchDialogs, fetchMessages, addMessage, deleteMessage}