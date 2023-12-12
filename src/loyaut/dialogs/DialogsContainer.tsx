import {addMessageAC, deleteMessageAC, updateNewMessageText, UsersType} from '../../redux/reducers/dialog-reducer';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs/Dialogs';
import {AppRootStateType} from '../../redux/store';
import {compose, Dispatch} from 'redux';
import React from 'react';
import {Navigate} from 'react-router-dom';
import {WithAuthRedirect, WithAuthRedirectPropsType} from '../../hoc/withAuthRedirect';

type PropsType = {}

class DialogsContainer extends React.Component<DialogPropsType, PropsType> {
    render() {
        return <Dialogs
            users={this.props.users}
            updateNewMessageText={this.props.updateNewMessageText}
            addNewMessage={this.props.addNewMessage}
            deleteMessage={this.props.deleteMessage}
        />
    }
}


type MapStateToPropsType = {
    users: UsersType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessageText: (userId: string, text: string) => void
    addNewMessage: (userId: string) => void
    deleteMessage: (userId: string, idMessage: string) => void
}
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.dialogReducer,
        isAuth: state.authReducer.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(DialogsContainer)
export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType & WithAuthRedirectPropsType


