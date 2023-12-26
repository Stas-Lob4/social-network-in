import {Posts} from './Posts';
import {AppDispatch, useAppSelector} from '../../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {profileActions, profileSelectors} from '../../../redux/reducers/profileReducer';


export const MyPostContainer =() => {
    const dispatch = useDispatch<AppDispatch>()
    const addPost = (text: string) => {
        dispatch(profileActions.addPost({text}))
    }
    const updateNewPostText =  (text: string, postId: string) => {
        dispatch(profileActions.updatePost({text, postId}))
    }


    return <Posts addPost={addPost}/>
}
