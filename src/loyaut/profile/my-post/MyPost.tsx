import React from 'react';
import {Post} from './Post';
import {ButtonInput, InputBox, TextArea} from './MyPostStyled';

export const MyPost = () => {
    return (
        <div>
            <h3>My posts</h3>
            <InputBox>
                <TextArea placeholder={"Input new post"}></TextArea>
                <ButtonInput>+</ButtonInput>
            </InputBox>
            <Post />
        </div>
    );
};

