import React, { ChangeEvent, FC } from "react"
import { ErrorMessage, FormInputContainer, StyledInput } from "../FilterForm/FIlterFormStyled"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { SettingFormStatusProfileStyled } from "./SettingFormStatusProfileStyled"
import { Button } from "../Button"

type FormData = {
  files: FileList
}

type PropsType = {
  setPhoto: (photo: File) => void
}

export const SettingFormPhotoProfile: FC<PropsType> = ({ setPhoto }) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setPhoto(data.files[0])
    console.log("Submitted:", { files: data.files[0] })
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setValue("files", e.target.files)
    }
  }

  return (
    <SettingFormStatusProfileStyled onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="files"
        control={control}
        render={({}) => (
          <FormInputContainer>
            <StyledInput type="file" onChange={onChangeHandler} error={!!errors.files} />
            {errors.files && <ErrorMessage>{errors.files.message}</ErrorMessage>}
          </FormInputContainer>
        )}
      />
      <Button type="submit" color={"green"}>
        save photo
      </Button>
    </SettingFormStatusProfileStyled>
  )
}
