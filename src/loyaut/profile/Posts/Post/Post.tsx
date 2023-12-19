import React from 'react';
import user_icon from '../../../../assets/img/user-icon.jpg'
import {PostItem, ProfilePostImg, TextPost} from './PostStyled';


type PostPropsType = {
    id: string
    text: string
    likeCount: number
    profileImage: string | null | undefined
}
export const Post: React.FC<PostPropsType> = ({id, text, likeCount, profileImage}) => {
    return  <PostItem key={id}>
                <ProfilePostImg src={profileImage? profileImage : user_icon} alt='Profile Image'/>
                <TextPost>{text}</TextPost><button>likes: {likeCount}</button>
            </PostItem>
};

