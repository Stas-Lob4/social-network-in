import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import {ButtonInput, InputBox, PostList, PostsContainer, PostsStyled, PostsTitle, TextArea} from './PostsStyled';
import {ProfilePageType} from '../../../redux/reducers/profileReducer';
import user_photo from '../../../assets/img/user-icon.jpg'
import {useAppSelector} from '../../../app/store';



type PostsPropsType = {
    addPost: (text: string) => void
}
export const Posts: React.FC<PostsPropsType> = React.memo( ({addPost})=> {
    const [text, setText] = useState<string>('')
    const stateProfile = useAppSelector(state => state.profileReducer)

    const onClickHandler = () => {
        if (text !== '') {
            addPost(text)
            setText('')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newText = e.currentTarget.value;
        if (newText !== '') {
            setText(newText)
        }
    }

    const onClickKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }

    let profileImage = stateProfile.profile?.photos.large

    const mapMyPosts = stateProfile?.posts.map(m =>
        <Post id={m.id} text={m.text} likeCount={m.likeCount} profileImage={profileImage}/>)
    return (
        <PostsStyled>
            <PostsContainer>
                <PostsTitle>My posts</PostsTitle>
                <InputBox>
                    <TextArea placeholder={'Input new post'}
                              value={text} onChange={onChangeHandler} onKeyPress={onClickKeyHandler}/>
                    <ButtonInput onClick={onClickHandler}>+</ButtonInput>
                </InputBox>
                <PostList>
                    {mapMyPosts}
                </PostList>
            </PostsContainer>
        </PostsStyled>
    );
})
