import React, { FC, useState } from "react"
import user_icon from "../../../../assets/img/user-icon.jpg"
import {
  BoxTextStatus,
  ContactsBox,
  ProfileImg,
  ProfileInfoBox,
  ProfileInfoContainer,
  ProfileInfoData,
  ProfileInfoStyled,
  ProfileTitle,
} from "./ProfileInfoStyled"
import { useAppSelector } from "../../../../app/store"
import { ProfileContacts } from "./ProfileConstacts"
import { Preloader } from "../../../../component/Preloader"
import { statusProfileSelector } from "../../model/profileSelectors"
import { authUserIdSelector } from "../../../login/model/auth/authSelectors"
import { Button } from "../../../../component/Button"
import { UpdateDataInfoProfileType } from "../../api/profile-api"
import { SettingInfoProfile } from "./SettingInfoProfile/SettingInfoProfile"
import { SettingButtons } from "./SettingInfoProfile/SettingInfoProfileStyled"

type ProfileInfoPropsType = {
  setStatus: (status: string) => void
  setInfoProfile: (updateDate: UpdateDataInfoProfileType) => void
  setPhoto: (photo: File) => void
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({ setStatus, setInfoProfile, setPhoto }) => {
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
            <SettingInfoProfile
              setStatus={setStatus}
              setInfoProfile={setInfoProfile}
              setEditMode={setEditMode}
              setPhoto={setPhoto}
            />
          )}
        </ProfileInfoBox>
      </ProfileInfoContainer>
    </ProfileInfoStyled>
  )
}
