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


type ProfileInfoPropsType = {
    profile: ProfileType
    setStatus: (status: string) => void
    status: string
}


export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, setStatus, status}) => {


    const map_contacts = Object.entries(profile.contacts).map(([key, value]) => {
        return <ContactsItem><b>{key}:</b>{value ? <a href={value ? value : undefined}>_{value}</a> : ' none'}</ContactsItem>
        })
    return (
        <ProfileInfoStyled>
            <ProfileInfoContainer>

                <ProfileInfoBox>
                    <div>
                        <ProfileImg src={profile.photos.large ? profile.photos.large : user_icon}/>
                        <ProfileTitle>My name: {profile.fullName}</ProfileTitle>
                        <ProfileStatus status={status} setStatus={setStatus}/>
                    </div>
                    <ContactsBox>
                        <ContactsTitle>Contacts:</ContactsTitle>
                        <ContactsList>{map_contacts}</ContactsList>
                    </ContactsBox>
                </ProfileInfoBox>
            </ProfileInfoContainer>
        </ProfileInfoStyled>
    );
};
