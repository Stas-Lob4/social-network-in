import React, {FC} from 'react';
import user_icon from '../../../assets/img/user-icon.jpg'
import {ProfileStatus} from './ProfileStatus';
import {ProfileImg, ProfileInfoBox, ProfileInfoContainer, ProfileInfoStyled, ProfileTitle} from './ProfileInfoStyled';
import {useAppSelector} from '../../../app/store';
import styled from 'styled-components';


type ProfileInfoPropsType = {
    setStatus: (status: string) => void
}


export const ProfileInfo: FC<ProfileInfoPropsType> = ({ setStatus}) => {
    const meId = useAppSelector(state => state.authReducer.userId)
    const profile = useAppSelector(state => state.profileReducer.profile)


    return (
        <ProfileInfoStyled>
            <ProfileInfoContainer>
                <ProfileInfoBox>
                    <ProfileImg src={profile?.photos?.large ? profile.photos.large : user_icon}/>
                    <ProfileInfoData>
                        {profile ? (
                            <>
                                <ProfileTitle>My name: {profile.fullName}</ProfileTitle>
                                <ProfileStatus setStatus={setStatus} isUsersStatus={meId === profile.userId}/>
                                {profile.userId === meId ? (
                                    <BoxTextStatus>
                                        Даже в самой худшей судьбе есть возможности для счастливых перемен.
                                    </BoxTextStatus>
                                ) : (
                                    <button>Follow</button>
                                )}
                            </>
                        ) : (
                            <div>Loading...</div>
                        )}
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