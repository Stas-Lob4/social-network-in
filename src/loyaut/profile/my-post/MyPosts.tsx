import React, {ChangeEvent} from 'react';
import {Post} from './Post';
import {ButtonInput, InputBox, TextArea} from './MyPostStyled';
import {ProfilePageType} from '../../../redux/state';

type MyPostPropsType = {
    stateProfile: ProfilePageType
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}
export const MyPosts: React.FC<MyPostPropsType> = ({stateProfile, addPost, updateNewPostText}) => {

    const onClickHandler = () => {
        if(stateProfile.newPostText !== ''){
            addPost(stateProfile.newPostText)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
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

