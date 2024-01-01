import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import styled from "styled-components"

type TextAreaStyledPropsType = {
  onClick: (text: string) => void
  disabled?: boolean
}
export const TextAreaStyled: React.FC<TextAreaStyledPropsType> = ({ onClick, disabled }) => {
  const [text, setText] = useState<string>("")

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.currentTarget.value
    setText(newText)
  }

  const onClickHandler = () => {
    if (text.trim() !== "") {
      setText("")
      onClick(text)
    }
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onClickHandler()
    }
  }

  return (
    <TextAreaBlockStyled>
      <Textarea maxLength={100} onChange={onChangeHandler} value={text} onKeyPress={onKeyPressHandler}></Textarea>
      <TextareaButton disabled={disabled} onClick={onClickHandler}>
        +
      </TextareaButton>
    </TextAreaBlockStyled>
  )
}

export const TextAreaBlockStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Textarea = styled.textarea`
  padding: 10px 50px 10px 10px;
  border-radius: 10px;
  font-size: 15px;
  min-width: 100%;
  height: 50px;
`

export const TextareaButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  &:hover {
    background: black;
    color: white;
  }
`
