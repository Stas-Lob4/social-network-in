import React, {FC} from 'react';
import styled from 'styled-components';
import borderImage from './../../assets/img/border.png'
import {MyPostContainer} from './my-post/MyPostsContainer';
import {ProfileType} from '../../redux/reducers/profile-reducer';
import styles from './Profile.module.css'
import {HashLoader} from 'react-spinners';
import {ProfileInfo} from './profile-info/ProfileInfo';


type PropsType = {
    profile: ProfileType | null
    setStatus: (status: string) => void
    status: string
}
export const Profile: FC<PropsType> = (props) => {

    return (
        <div className={styles.profile_container}>
            {props.profile === null ?
                <div className={styles.preloader_box}>
                    <HashLoader
                        color={'red'}
                        size={250}
                    />
                </div>
                : <div>
                    <BorderImage src={borderImage}/>
                    <ProfileInfo profile={props.profile} setStatus={props.setStatus} status={props.status}/>
                    <MyPostContainer/>
                </div>
            }
        </div>
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
  width: {(props)= > props . width
  };
  height: {(props)= > props . height
  };
`

export const ProfileStyled = styled.div`

`