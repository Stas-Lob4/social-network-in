import {AppDispatch} from '../store';
import {dialogsApi} from '../../api/dialogsApi';
import {addMessageAC, deleteMessageAC, setDialogsAC, setMessagesAC} from '../reducers/dialogReducer';
import {setStatusAppAC} from '../reducers/appReducer';
import {handleServerAppError, handleServerNetworkError} from '../../utils';

export const setDialogsTC = () => async (dispatch: AppDispatch) => {
    console.log('dialogs')
    try {
        dispatch(setStatusAppAC('loading'))
        const res = await dialogsApi.getDialog()
        console.log('dialogs', res.data)
        dispatch(setDialogsAC(res.data))
        dispatch(setStatusAppAC('succeeded'))

    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }

}

export const setMessagesTC = (id: number) => async (dispatch: AppDispatch) => {
    try {
        console.log('messages', id)
        const res = await dialogsApi.getMessages(id)
        dispatch(setMessagesAC(res.data.items))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}

export const addMessageTC = (id: number, text: string) => async (dispatch: AppDispatch) => {
    try {
        console.log('messages', id)
        const res = await dialogsApi.addMessage(id, {body: text})
        console.log(res.data.data.message)
        const mes = {
            id: res.data.data.message.id,
            body: res.data.data.message.body,
            translatedBody: res.data.data.message.translatedBody,
            addedAt: res.data.data.message.addedAt,
            senderId: res.data.data.message.senderId,
            senderName: res.data.data.message.senderName,
            recipientId: res.data.data.message.recipientId,
            viewed: false,
        }
        dispatch(addMessageAC(mes))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}

export const deleteMessageTC = (messageId: string) => async (dispatch: AppDispatch) => {
    try {
        console.log('messages', messageId)
        const res = await dialogsApi.deleteMessage(messageId)
        console.log('delete', res.data)
        if(res.data.resultCode === 0){
            dispatch(deleteMessageAC(messageId))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}
