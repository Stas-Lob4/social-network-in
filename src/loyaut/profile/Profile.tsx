import React from 'react';
import styled from 'styled-components';
import borderImage from './../../assets/img/border.png'
import {MyPost} from './my-post/MyPost';

export const Profile = () => {
    return (
        <ProfileStyled>
            <BorderImage src={borderImage}/>
            <ImageProfile/>
            <div>
                Information to Profile
            </div>
            <MyPost />
        </ProfileStyled>
    );
};

export const BorderImage = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  border: 1px solid transparent;
`

export const ImageProfile = styled.image`

`

export const ProfileStyled = styled.div`
  
`