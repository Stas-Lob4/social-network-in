import React, {FC, useEffect, useState} from 'react';
import borderImage from './../../assets/img/border.png'
import {MyPostContainer} from './Posts/PostsContainer';
import {HashLoader} from 'react-spinners';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {BorderImage, PreloaderContainer, ProfileContainer, ProfileStyled} from './ProfileStyled';
import {ContactsBox, ContactsTitle} from './ProfileInfo/ProfileInfoStyled';
import styled from 'styled-components';
import {useActions} from '../../hooks/useActions';
import {profileThunks} from '../../redux/thunks/profileThunks';
import {Navigate, redirect, useParams} from 'react-router-dom';
import {useAppSelector} from '../../app/store';
import {ProfileContacts} from './ProfileInfo/ProfileConstacts';


type PropsType = {}
export const Profile: FC<PropsType> = () => {
    const {
        fetchUserProfile,
        fetchUserStatusProfile,
        updateUserStatusProfile
    } = useActions({...profileThunks})

    const {userId} = useParams<{ userId: string }>();

    const profile = useAppSelector(state => state.profileReducer.profile)
    const status = useAppSelector(state => state.profileReducer.status)
    const profileId = useAppSelector(state => state.authReducer.userId)
    const isAuth = useAppSelector(state => state.authReducer.isAuth)

    const updateStatusProfile = (status: string) => {
        updateUserStatusProfile(status)
    }

    let id = userId ? +userId : profileId;

    useEffect(() => {
        console.log('Profile', userId)
        if (!id) {
            redirect('/login')
        } else {
            fetchUserProfile(id)
            fetchUserStatusProfile(id)
        }
    }, [id]);

   if(!isAuth){
        return <Navigate to={'/login'}/>
    } else if (status === 'loading') {
        return <HashLoader size={250}/>
    }

        return (
        <ProfileStyled>
            {profile === null ?
                <PreloaderContainer>
                    <HashLoader
                        color={'red'}
                        size={250}
                    />
                </PreloaderContainer>
                : <ProfileContainer>
                    <BorderImage src={borderImage}/>
                    <ProfileInfo setStatus={updateStatusProfile}/>
                    <SectionBox>
                        <ContactsBox>
                            <ContactsTitle>Contacts:</ContactsTitle>
                            <ProfileContacts/>
                        </ContactsBox>
                        <MyPostContainer/>
                    </SectionBox>
                </ProfileContainer>
            }
        </ProfileStyled>
    );
};

export const SectionBox = styled.div`
    display: flex;
    gap: 20px;
`

