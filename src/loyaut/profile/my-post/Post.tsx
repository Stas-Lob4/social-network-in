import React from 'react';
import {ImageProfile} from '../Profile';
import styled from 'styled-components';


type PostPropsType = {
    id: string
    text: string
    likeCount: number
}
export const Post: React.FC<PostPropsType> = ({id, text, likeCount}) => {
    return  <li key={id}>
                <ImageProfile/>
                <TextPost>{text}</TextPost><button>likes: {likeCount}</button>
            </li>
};

export const TextPost = styled.span`

`