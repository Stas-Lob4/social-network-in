import React from 'react';
import {ImageProfile} from '../Profile';
import styled from 'styled-components';

export const Post = () => {
    return (
        <ul>
            <li>
                <ImageProfile/>
                <TextPost></TextPost>
            </li>
        </ul>
    );
};

export const TextPost = styled.span`

`