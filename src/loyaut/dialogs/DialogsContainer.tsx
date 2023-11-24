import {addMessageAC, deleteMessageAC, updateNewMessageText, UsersType} from '../../redux/dialog-reducer';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs/Dialogs';
import {AppRootStateType} from '../../redux/store';
import { Dispatch } from 'redux';

type MapStatePropsType = {
    users: UsersType
}

type MapDispatchPropsType = {
    updateNewMessageText: (userId: string, text: string) => void
    addNewMessage: (userId: string) => void
    deleteMessage: (userId: string, idMessage: string) => void
}
let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.dialogReducer
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageText: (userId: string, text: string) => {
            dispatch(updateNewMessageText(userId, text))
        },
        addNewMessage: (userId: string) => {
            dispatch(addMessageAC(userId))
        },
        deleteMessage: (userId: string, idMessage: string) => {
            dispatch(deleteMessageAC(userId, idMessage))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export type DialogPropsType = MapStatePropsType & MapDispatchPropsType


