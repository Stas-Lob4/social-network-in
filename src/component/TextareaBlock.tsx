import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import styled from "styled-components"

type TextareaBlock = {
  onClick: (text: string) => void
  disabled?: boolean
}
export const TextareaBlock: React.FC<TextareaBlock> = ({ onClick, disabled }) => {
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

export const TextAreaBlockStyled = styled.div``

export const Textarea = styled.textarea``

export const TextareaButton = styled.button``
