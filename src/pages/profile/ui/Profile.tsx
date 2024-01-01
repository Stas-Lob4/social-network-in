import React, { FC, useEffect } from "react"
import { MyPostContainer } from "./Posts/PostsContainer"
import { HashLoader } from "react-spinners"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo"
import { PreloaderContainer, ProfileContainer, ProfileStyled } from "./ProfileStyled"
import { ContactsBox, ContactsTitle } from "./ProfileInfo/ProfileInfoStyled"
import { useActions } from "../../../hooks/useActions"
import { profileThunks } from "../model/profileThunks"
import { Navigate, redirect, useParams } from "react-router-dom"
import { useAppSelector } from "../../../app/store"
import { ProfileContacts } from "./ProfileInfo/ProfileConstacts"
import { FlexWrap } from "../../../component/FlexWrap"
import { Preloader } from "../../../component/Preloader"
import { UpdateDataInfoProfileType } from "../api/profile-api"

export const Profile: FC = React.memo(() => {
  const {
    fetchUserProfile,
    fetchUserStatusProfile,
    updateUserStatusProfile,
    updateUserInfoProfile,
    updateUserPhotoProfile,
  } = useActions({
    ...profileThunks,
  })

  const { userId } = useParams<{ userId: string }>()

  const profile = useAppSelector((state) => state.profileReducer.profile)
  const status = useAppSelector((state) => state.profileReducer.status)
  const profileId = useAppSelector((state) => state.authReducer.userId)
  const isAuth = useAppSelector((state) => state.authReducer.isAuth)

  const updateStatusProfile = (status: string) => {
    updateUserStatusProfile(status)
  }
  const updateInfoProfile = (updateData: UpdateDataInfoProfileType) => {
    if (profile !== null && profileId !== null) {
      updateUserInfoProfile({ updateData: updateData, userId: profileId, photos: profile?.photos })
    }
  }

  const updatePhotoProfile = (photo: File) => {
    if (profile !== null) {
      updateUserPhotoProfile({ photo, userId: profile.userId })
    }
  }

  let id = userId ? +userId : profileId

  useEffect(() => {
    console.log("Profile", userId)
    if (!id) {
      redirect("/login")
    } else {
      fetchUserProfile(id)
      fetchUserStatusProfile(id)
    }
  }, [id])

  if (!isAuth) {
    return <Navigate to={"/login"} />
  } else if (status === "loading") {
    return <Preloader />
  }

  return (
    <ProfileStyled>
      {profile === null ? (
        <Preloader />
      ) : (
        <ProfileContainer>
          <ProfileInfo
            setStatus={updateStatusProfile}
            setInfoProfile={updateInfoProfile}
            setPhoto={updatePhotoProfile}
          />
          <FlexWrap gap={"20px"}>
            <MyPostContainer />
          </FlexWrap>
        </ProfileContainer>
      )}
    </ProfileStyled>
  )
})
