import React, {FC} from 'react';
import {ProfileType} from '../../../redux/reducers/profileReducer';
import user_icon from '../../../assets/img/user-icon.jpg'
import {ProfileStatus} from './ProfileStatus';
import {
    ContactsBox, ContactsItem, ContactsList, ContactsTitle,
    ProfileImg,
    ProfileInfoBox,
    ProfileInfoContainer,
    ProfileInfoStyled,
    ProfileTitle
} from './ProfileInfoStyled';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {UserType} from '../../../redux/reducers/usersReducer';
import styled from 'styled-components';


type ProfileInfoPropsType = {
    profile: ProfileType
    setStatus: (status: string) => void
    status: string
    users: UserType[]
}


export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, setStatus, status, users}) => {
    const myId = useSelector<AppRootStateType, number | null>(state => state.authReducer.userId)


    return (
        <ProfileInfoStyled>
            <ProfileInfoContainer>

                <ProfileInfoBox>
                    <ProfileImg src={profile.photos.large ? profile.photos.large : user_icon}/>
                    <ProfileInfoData>
                        <ProfileTitle>My name: {profile.fullName}</ProfileTitle>
                        <ProfileStatus status={status} setStatus={setStatus}/>
                        {profile.userId === myId
                            ? <BoxTextStatus>Даже в самой худшей судьбе есть возможности для счастливых перемен.</BoxTextStatus>
                            : <button>Follov</button>
                        }
                    </ProfileInfoData>

                </ProfileInfoBox>
            </ProfileInfoContainer>
        </ProfileInfoStyled>
    );
};
export const ProfileInfoData = styled.div`
    padding-top: 20px;
    line-height: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BoxTextStatus = styled.b`
    width: 230px;
    background: white;
    border-radius: 20px;
    padding: 10px;
    color: #262626;
`