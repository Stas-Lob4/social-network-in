import React, {ChangeEvent} from 'react';
import {Post} from './Post';
import {ButtonInput, InputBox, TextArea} from './MyPostStyled';
import {ActionType, ProfilePageType} from '../../../redux/state';
import {addPostAC, updateNewPostText} from '../../../redux/profile-reducer';

type MyPostPropsType = {
    stateProfile: ProfilePageType
    dispatch: (action: ActionType) => void
}
export const MyPosts: React.FC<MyPostPropsType> = ({stateProfile, dispatch}) => {

    const onClickHandler = () => {
        if(stateProfile.newPostText !== ''){
            dispatch(addPostAC())
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.currentTarget.value;

        if (newText !== '') {
            dispatch(updateNewPostText(newText));
        }
    }

    const mapMyPosts = stateProfile.posts.map(m => <Post id={m.id} text={m.text} likeCount={m.likeCount}/>)
    return (
        <div>
            <h3>My posts</h3>
                <InputBox>
                    <TextArea placeholder={'Input new post'} value={stateProfile.newPostText} onChange={onChangeHandler}/>
                    <ButtonInput onClick={onClickHandler}>+</ButtonInput>
                </InputBox>
            <div>
                <ul>
                    {mapMyPosts}
                </ul>
            </div>

        </div>
    );
};

