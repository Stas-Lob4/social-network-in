import {addPostAC, ProfilePageType, updateNewPostTextAC} from '../../../redux/reducers/profileReducer';
import {Posts} from './Posts';
import {AppRootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type MyPostPropsType = MapStateToPropsType & MapDispatchPropsType

type MapStateToPropsType = {
    stateProfile: ProfilePageType
    profileImage?: string | null
}
type MapDispatchPropsType = {
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        stateProfile: state.profileReducer,
        profileImage: state.profileReducer.profile?.photos.large
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}




export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
