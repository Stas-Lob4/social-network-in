import React, {FC} from 'react';
import styled from 'styled-components';
import borderImage from './../../assets/img/border.png'
import {MyPosts} from './my-post/MyPosts';
import {ActionType, ProfilePageType} from '../../redux/state';


type PropsType = {
    stateProfile: ProfilePageType
    dispatch: (action: ActionType) => void
}
export const Profile: FC<PropsType> = ({stateProfile, dispatch}) => {


    return (
        <ProfileStyled>
            <BorderImage src={borderImage}/>
            <ImageProfile/>
            <div>
                Information to Profile
            </div>
            <MyPosts stateProfile={stateProfile} dispatch={dispatch}/>
        </ProfileStyled>
    );
};

export const BorderImage = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  border: 1px solid transparent;
`

type ImageProfilePropsType = {
    width?: string
    height?: string
}
export const ImageProfile = styled.image<ImageProfilePropsType>`
  width: {(props) => props.width};
  height: {(props) => props.height};
`

export const ProfileStyled = styled.div`
  
`