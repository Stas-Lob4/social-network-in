import React, { FC } from "react"
import { ErrorMessage, FormInputContainer } from "../FilterForm/FIlterFormStyled"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useAppSelector } from "../../app/store"
import { statusProfileSelector } from "../../pages/profile/model/profileSelectors"
import { SettingFormStatusProfileStyled, StyledTextarea } from "./SettingFormStatusProfileStyled"
import { Button } from "../Button"

type FormData = {
  status: string
}

type PropsType = {
  setStatus: (status: string) => void
}

export const SettingFormStatusProfile: FC<PropsType> = ({ setStatus }) => {
  const status = useAppSelector(statusProfileSelector)

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setStatus(data.status)
    console.log("Submitted:", { status: data.status })
  }

  return (
    <SettingFormStatusProfileStyled onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="status"
        control={control}
        defaultValue={status}
        render={({ field }) => (
          <FormInputContainer>
            <StyledTextarea
              placeholder="Search users"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setValue("status", e.target.value)
              }}
              error={!!errors.status}
            />
            {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
          </FormInputContainer>
        )}
        rules={{
          maxLength: { value: 300, message: "maxLength: 300" },
        }}
      />
      <Button type="submit" color={"green"}>
        save status
      </Button>
    </SettingFormStatusProfileStyled>
  )
}
