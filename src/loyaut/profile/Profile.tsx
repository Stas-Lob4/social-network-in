import React, {FC} from 'react';
import borderImage from './../../assets/img/border.png'
import {MyPostContainer} from './Posts/PostsContainer';
import {ProfileType} from '../../redux/reducers/profileReducer';
import {HashLoader} from 'react-spinners';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {BorderImage, PreloaderContainer, ProfileContainer, ProfileStyled} from './ProfileStyled';


type PropsType = {
    profile: ProfileType | null
    setStatus: (status: string) => void
    status: string
}
export const Profile: FC<PropsType> = (props) => {

    return (
        <ProfileStyled>
                {props.profile === null ?
                    <PreloaderContainer>
                        <HashLoader
                            color={'red'}
                            size={250}
                        />
                    </PreloaderContainer>
                    : <ProfileContainer>
                        <ProfileInfo profile={props.profile} setStatus={props.setStatus} status={props.status}/>
                        {}
                        <MyPostContainer/>
                    </ProfileContainer>
                }
        </ProfileStyled>
    );
};



