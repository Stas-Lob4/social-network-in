import {addPostAC, ProfilePageType, updateNewPostTextAC} from '../../../redux/reducers/profile-reducer';
import {MyPosts} from './MyPosts';
import {AppRootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type MyPostPropsType = MapStateToPropsType & MapDispatchPropsType

type MapStateToPropsType = {
    stateProfile: ProfilePageType
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        stateProfile: state.profileReducer
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}




export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
