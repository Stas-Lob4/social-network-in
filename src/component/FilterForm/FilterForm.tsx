import React, { useEffect } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { FilterType } from "../../pages/users/model/usersReducer"
import { useAppSelector } from "../../app/store"
import { Button, ErrorMessage, FormContainer, FormInputContainer, StyledInput, StyledSelect } from "./FIlterFormStyled"

type FormData = {
  text: string
  option: string
}

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}
export const FilterForm: React.FC<PropsType> = ({ onFilterChanged }) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const filter = useAppSelector((state) => state.usersReducer.filter)

  const onSubmit: SubmitHandler<FormData> = (filter) => {
    const statusFriends = filter.option === "no friends" ? false : filter.option === "friends" ? true : null
    const data = { term: filter.text, friend: statusFriends }
    onFilterChanged(data)
    console.log("Submitted:", { term: filter.text, friend: statusFriends })
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="text"
        control={control}
        defaultValue={filter.term}
        render={({ field }) => (
          <FormInputContainer>
            <StyledInput
              placeholder="Search users"
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue("text", e.target.value)
              }}
              error={!!errors.text}
            />
            {errors.text && <ErrorMessage>{errors.text.message}</ErrorMessage>}
          </FormInputContainer>
        )}
        rules={{
          maxLength: { value: 15, message: "max letters is 15" },
        }}
      />

      <Controller
        name="option"
        control={control}
        defaultValue={filter.friend === true ? "friends" : filter.friend === false ? "no friends" : ""}
        render={({ field }) => (
          <>
            <StyledSelect
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setValue("option", e.target.value)
              }}
              error={!!errors.option}
            >
              <option value={""}>all</option>
              <option value={"friends"}>friends</option>
              <option value={"no friends"}>not friends</option>
            </StyledSelect>
            {errors.option && <ErrorMessage>{errors.option.message}</ErrorMessage>}
          </>
        )}
      />

      <Button type="submit">Search</Button>
    </FormContainer>
  )
}
