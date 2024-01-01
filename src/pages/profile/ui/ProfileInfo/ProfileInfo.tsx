import React, { FC, useState } from "react"
import user_icon from "../../../../assets/img/user-icon.jpg"
import { ProfileStatus } from "./ProfileStatus"
import {
  ContactsBox,
  ProfileImg,
  ProfileInfoBox,
  ProfileInfoContainer,
  ProfileInfoStyled,
  ProfileTitle,
} from "./ProfileInfoStyled"
import { useAppSelector } from "../../../../app/store"
import styled from "styled-components"
import { ProfileContacts } from "./ProfileConstacts"
import { Preloader } from "../../../../component/Preloader"
import { statusProfileSelector } from "../../model/profileSelectors"
import { authUserIdSelector } from "../../../login/model/auth/authSelectors"
import { SettingFormStatusProfile } from "../../../../component/SettingForms/SettingFormStatusProfile"
import { Button } from "../../../../component/Button"
import { FlexWrap } from "../../../../component/FlexWrap"
import { SettingFormInfoProfile } from "../../../../component/SettingForms/SettingFormInfoProfile"
import { UpdateDataInfoProfileType } from "../../api/profile-api"

type ProfileInfoPropsType = {
  setStatus: (status: string) => void
  setInfoProfile: (updateDate: UpdateDataInfoProfileType) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ setStatus, setInfoProfile }) => {
  const authUserId = useAppSelector(authUserIdSelector)
  const profile = useAppSelector((state) => state.profileReducer.profile)
  const status = useAppSelector(statusProfileSelector)
  const [editMode, setEditMode] = useState(false)

  if (profile === undefined || profile === null) {
    return <Preloader />
  }

  return (
    <ProfileInfoStyled>
      <ProfileInfoContainer>
        <ProfileInfoBox>
          <ProfileImg src={profile?.photos?.large ? profile.photos.large : user_icon} />
          <ProfileInfoData>
            <ProfileTitle>{profile.fullName}</ProfileTitle>
            <BoxTextStatus>{status ? status : "Стремлюсь к лучшему каждый день. 💡"}</BoxTextStatus>
            {profile.userId === authUserId && (
              <SettingButtons>
                <Button onClick={() => setEditMode(true)}>Edit profile info</Button>
                <Button>Edit photo</Button>
              </SettingButtons>
            )}
          </ProfileInfoData>
          <ContactsBox>
            <ProfileContacts />
          </ContactsBox>
          {editMode && (
            <SettingContainer>
              <FlexWrap align={"center"} justify={"space-between"}>
                <h1>Settings</h1>
                <Button onClick={() => setEditMode(false)} color={"red"}>
                  X
                </Button>
              </FlexWrap>
              <SettingFormStatusProfile setStatus={setStatus} />
              <SettingFormInfoProfile setInfoProfile={setInfoProfile} />
            </SettingContainer>
          )}
        </ProfileInfoBox>
      </ProfileInfoContainer>
    </ProfileInfoStyled>
  )
}

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

export const SettingButtons = styled.div`
  display: flex;
  gap: 10px;
`

export const SettingContainer = styled.div`
  border-radius: 10px;
  min-width: 300px;
  max-width: 700px;
  width: 100%;
  position: absolute;
  background: grey;
  padding: 20px;
  z-index: 10;
  max-height: 80vh;
  overflow-y: scroll;
`
