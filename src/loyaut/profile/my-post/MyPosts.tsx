import React, {ChangeEvent,useState, KeyboardEvent} from 'react';
import {Post} from './Post';
import {ButtonInput, InputBox, TextArea} from './MyPostStyled';
import {MyPostPropsType} from './MyPostsContainer';


export const MyPosts: React.FC<MyPostPropsType> = React.memo(({stateProfile, addPost, updateNewPostText}) => {

    const [text, setText] = useState<string>('')

    const onClickHandler = () => {
        if(text !== ''){
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
        if(e.key === 'Enter'){
            onClickHandler()
        }
    }

    const mapMyPosts = stateProfile.posts.map(m => <Post id={m.id} text={m.text} likeCount={m.likeCount}/>)
    return (
        <div>
            <h3>My posts</h3>
                <InputBox>
                    <TextArea placeholder={'Input new post'}
                              value={text} onChange={onChangeHandler} onKeyPress={onClickKeyHandler}/>
                    <ButtonInput onClick={onClickHandler} >+</ButtonInput>
                </InputBox>
            <div>
                <ul>
                    {mapMyPosts}
                </ul>
            </div>

        </div>
    );
})
