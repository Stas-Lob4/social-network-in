import React, { FC } from "react"
import { FlexWrap } from "../../../../../component/FlexWrap"
import { Button } from "../../../../../component/Button"
import { SettingFormStatusProfile } from "../../../../../component/SettingForms/SettingFormStatusProfile"
import { SettingFormInfoProfile } from "../../../../../component/SettingForms/SettingFormInfoProfile"
import { UpdateDataInfoProfileType } from "../../../api/profile-api"
import { SettingContainer } from "./SettingInfoProfileStyled"
import { SettingFormPhotoProfile } from "../../../../../component/SettingForms/SettingFormPhotoProfile"

type SettingInfoProfilePropsType = {
  setStatus: (status: string) => void
  setInfoProfile: (updateDate: UpdateDataInfoProfileType) => void
  setEditMode: (status: boolean) => void
  setPhoto: (photo: File) => void
}
export const SettingInfoProfile: FC<SettingInfoProfilePropsType> = ({
  setInfoProfile,
  setStatus,
  setEditMode,
  setPhoto,
}) => {
  return (
    <SettingContainer>
      <FlexWrap align={"center"} justify={"space-between"}>
        <h1>Settings</h1>
        <Button onClick={() => setEditMode(false)} color={"red"}>
          X
        </Button>
      </FlexWrap>
      <SettingFormStatusProfile setStatus={setStatus} />
      <SettingFormPhotoProfile setPhoto={setPhoto} />
      <SettingFormInfoProfile setInfoProfile={setInfoProfile} />
    </SettingContainer>
  )
}
