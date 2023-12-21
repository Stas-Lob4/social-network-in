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
                    <div>
                        <ProfileTitle>My name: {profile.fullName}</ProfileTitle>
                        <ProfileStatus status={status} setStatus={setStatus}/>
                        {profile.userId === myId
                            ? <b style={{color: 'Black'}}>Vseti</b>
                            : <button>Follov</button>
                        }
                    </div>

                </ProfileInfoBox>
            </ProfileInfoContainer>
        </ProfileInfoStyled>
    );
};
