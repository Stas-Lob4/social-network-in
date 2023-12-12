import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/reducers/profile-reducer';
import user_icon from '../../../assets/img/user-icon.jpg'
import {ProfileStatus} from './ProfileStatus';


type ProfileInfoPropsType = {
    profile: ProfileType
    setStatus: (status: string) => void
    status: string
}


export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, setStatus, status}) => {




    const map_contacts = Object.entries(profile.contacts).map(([key, value]) => {
        return <li><b>{key}:</b><span>{value}</span></li>
    })
    return (
        <div className={s.container_profile_info}>
            <img src={profile.photos.large ? profile.photos.large : user_icon}/>
            <div>
                <div><ProfileStatus status={status} setStatus={setStatus}/></div>
                <div>
                    <h3>Contacts:</h3>
                    <ul>{map_contacts}</ul>
                </div>
            </div>
            
        </div>
    );
};
