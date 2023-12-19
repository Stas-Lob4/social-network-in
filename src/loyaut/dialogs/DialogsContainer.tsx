import {
    addMessageAC, deleteMessageAC,
    DialogType, updateNewMessageTextAC,
} from '../../redux/reducers/dialogReducer';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs/Dialogs';
import {AppDispatch, AppRootStateType} from '../../redux/store';
import {compose} from 'redux';
import React from 'react';
import {WithAuthRedirect, WithAuthRedirectPropsType} from '../../hoc/withAuthRedirect';
import {addMessageTC, deleteMessageTC, setDialogsTC} from '../../redux/thunks/dialogsThunk';

type PropsType = {}

class DialogsContainer extends React.Component<DialogPropsType, PropsType> {

    componentDidMount() {
        this.props.setDialogsTC()
    }

    render() {
        return <Dialogs
            dialogs={this.props.dialogs}
            updateNewMessageText={this.props.updateNewMessageText}
            addNewMessage={this.props.addNewMessage}
            deleteMessage={this.props.deleteMessage}
        />
    }
}


type MapStateToPropsType = {
    dialogs: DialogType[]
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessageText: (userId: number, text: string) => void
    addNewMessage: (userId: number,text: string) => void
    deleteMessage: (messageId: string) => void
    setDialogsTC: () => void
}
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogReducer.dialogs,
        isAuth: state.authReducer.isAuth
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageText: (userId: number, text: string) => {
            dispatch(updateNewMessageTextAC(userId, text))
        },
        addNewMessage: (userId: number, text: string) => {
            dispatch(addMessageTC(userId, text))
        },
        deleteMessage: (messageId: string) => {
            dispatch(deleteMessageTC(messageId))
        },
        setDialogsTC: () => {
           dispatch(setDialogsTC())
        }
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(DialogsContainer)
export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType & WithAuthRedirectPropsType


