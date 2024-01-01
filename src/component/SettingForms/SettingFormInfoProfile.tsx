import React, { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { ErrorMessage, FormInputContainer, StyledInput } from "../FilterForm/FIlterFormStyled"
import { useAppSelector } from "../../app/store"
import { profileInfoSelector } from "../../pages/profile/model/profileSelectors"
import { FlexWrap } from "../FlexWrap"
import { StyledTextarea } from "./SettingFormStatusProfileStyled"
import { UpdateDataInfoProfileType } from "../../pages/profile/api/profile-api"
import { Button } from "../Button"

export type FormData = {
  aboutMe: string | ""
  lookingForAJob: boolean
  lookingForAJobDescription: string | ""
  fullName: string
  contacts: {
    facebook: string | ""
    website: string | ""
    vk: string | ""
    twitter: string | ""
    instagram: string | ""
    youtube: string | ""
    github: string | ""
    mainLink: string | ""
  }
}

type PropsType = {
  setInfoProfile: (updateDate: UpdateDataInfoProfileType) => void
}

export const SettingFormInfoProfile: FC<PropsType> = ({ setInfoProfile }) => {
  const profile = useAppSelector(profileInfoSelector)
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setInfoProfile(data)
    console.log("Submitted:", { data })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fullName"
        control={control}
        defaultValue={profile?.fullName}
        render={({ field }) => (
          <FormInputContainer>
            <label>Full Name: </label>
            <StyledInput
              placeholder="Search users"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("fullName", e.target.value)
              }}
              error={!!errors.fullName}
            />
            {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
          </FormInputContainer>
        )}
        rules={{
          maxLength: { value: 15, message: "max letters is 15" },
        }}
      />
      <Controller
        name="lookingForAJob"
        control={control}
        defaultValue={profile?.lookingForAJob}
        render={({ field }) => (
          <FlexWrap height={"40px"} gap={"10px"} align={"flex-end"}>
            <label>Looking for a job: </label>
            <StyledInput
              style={{ height: "20px", width: "20px" }}
              type="checkbox"
              checked={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("lookingForAJob", e.target.checked)
              }}
              error={!!errors.lookingForAJob}
            />
            {errors.lookingForAJob && <ErrorMessage>{errors.lookingForAJob.message}</ErrorMessage>}
          </FlexWrap>
        )}
      />
      <Controller
        name="lookingForAJobDescription"
        control={control}
        defaultValue={profile?.lookingForAJobDescription}
        render={({ field }) => (
          <FormInputContainer>
            <label>Looking for a job description: </label>
            <StyledTextarea
              placeholder="Search users"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setValue("lookingForAJobDescription", e.target.value)
              }}
              error={!!errors.lookingForAJobDescription}
            />
            {errors.lookingForAJobDescription && (
              <ErrorMessage>{errors.lookingForAJobDescription.message}</ErrorMessage>
            )}
          </FormInputContainer>
        )}
        rules={{
          maxLength: { value: 100, message: "max letters is 100" },
        }}
      />
      <Controller
        name="aboutMe"
        control={control}
        defaultValue={profile?.aboutMe}
        render={({ field }) => (
          <FormInputContainer>
            <label>About me: </label>
            <StyledTextarea
              placeholder="about me"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setValue("aboutMe", e.target.value)
              }}
              error={!!errors.aboutMe}
            />
            {errors.aboutMe && <ErrorMessage>{errors.aboutMe.message}</ErrorMessage>}
          </FormInputContainer>
        )}
        rules={{
          maxLength: { value: 300, message: "max letters is 300" },
        }}
      />
      {/*contacts*/}
      <Controller
        name="contacts.facebook"
        control={control}
        defaultValue={profile?.contacts.facebook}
        render={({ field }) => (
          <FormInputContainer>
            <label>Facebook: </label>
            <StyledInput
              placeholder="Facebook URL"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("contacts.facebook", e.target.value)
              }}
            />
            {errors.contacts?.facebook && <ErrorMessage>{errors.contacts?.facebook.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Controller
        name="contacts.website"
        defaultValue={profile?.contacts.website}
        control={control}
        render={({ field }) => (
          <FormInputContainer>
            <label>Website: </label>
            <StyledInput
              placeholder="website URL"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("contacts.website", e.target.value)
              }}
            />
            {errors.contacts?.website && <ErrorMessage>{errors.contacts?.website.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Controller
        name="contacts.vk"
        defaultValue={profile?.contacts.vk}
        control={control}
        render={({ field }) => (
          <FormInputContainer>
            <label>VK: </label>
            <StyledInput
              placeholder="vk URL"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("contacts.vk", e.target.value)
              }}
            />
            {errors.contacts?.vk && <ErrorMessage>{errors.contacts?.vk.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Controller
        name="contacts.twitter"
        defaultValue={profile?.contacts.twitter}
        control={control}
        render={({ field }) => (
          <FormInputContainer>
            <label>Twitter: </label>
            <StyledInput
              placeholder="twitter URL"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("contacts.twitter", e.target.value)
              }}
            />
            {errors.contacts?.twitter && <ErrorMessage>{errors.contacts?.twitter.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Controller
        name="contacts.instagram"
        defaultValue={profile?.contacts.instagram}
        control={control}
        render={({ field }) => (
          <FormInputContainer>
            <label>Instagram: </label>
            <StyledInput
              placeholder="instagram URL"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("contacts.instagram", e.target.value)
              }}
            />
            {errors.contacts?.instagram && <ErrorMessage>{errors.contacts?.instagram.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Controller
        name="contacts.youtube"
        defaultValue={profile?.contacts.youtube}
        control={control}
        render={({ field }) => (
          <FormInputContainer>
            <label>YouTube: </label>
            <StyledInput
              placeholder="youtube URL"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("contacts.youtube", e.target.value)
              }}
            />
            {errors.contacts?.youtube && <ErrorMessage>{errors.contacts?.youtube.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Controller
        name="contacts.github"
        defaultValue={profile?.contacts.github}
        control={control}
        render={({ field }) => (
          <FormInputContainer>
            <label>Github: </label>
            <StyledInput
              placeholder="github URL"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("contacts.github", e.target.value)
              }}
            />
            {errors.contacts?.github && <ErrorMessage>{errors.contacts?.github.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Controller
        name="contacts.mainLink"
        defaultValue={profile?.contacts.mainLink}
        control={control}
        render={({ field }) => (
          <FormInputContainer>
            <label>Main Link: </label>
            <StyledInput
              placeholder="mainLink URL"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("contacts.mainLink", e.target.value)
              }}
            />
            {errors.contacts?.mainLink && <ErrorMessage>{errors.contacts?.mainLink.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Button type="submit" color={"green"}>
        save profile info
      </Button>
    </form>
  )
}
