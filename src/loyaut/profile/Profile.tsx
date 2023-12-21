import React, {FC} from 'react';
import borderImage from './../../assets/img/border.png'
import {MyPostContainer} from './Posts/PostsContainer';
import {ProfileType} from '../../redux/reducers/profileReducer';
import {HashLoader} from 'react-spinners';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {BorderImage, PreloaderContainer, ProfileContainer, ProfileStyled} from './ProfileStyled';
import {ContactsBox, ContactsItem, ContactsList, ContactsTitle} from './ProfileInfo/ProfileInfoStyled';
import styled from 'styled-components';
import {UserType} from '../../redux/reducers/usersReducer';


type PropsType = {
    profile: ProfileType | null
    setStatus: (status: string) => void
    status: string
    users: UserType[]
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
                        <BorderImage src={borderImage}/>
                        <ProfileInfo users={props.users} profile={props.profile} setStatus={props.setStatus} status={props.status}/>
                        <SectionBox>
                            <ContactsBox>
                                <ContactsTitle>Contacts:</ContactsTitle>
                                <ContactsList>{
                                    Object.entries(props.profile.contacts).map(([key, value]) => {
                                    return <ContactsItem>
                                        <b>{key}:</b>
                                        {value ? <a href={value ? value : undefined}>_{value}</a> : ' none'}
                                    </ContactsItem>
                                })}</ContactsList>
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

