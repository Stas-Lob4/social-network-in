import styled from "styled-components"

export const SettingFormStatusProfileStyled = styled.form`
  display: flex;
  align-items: stretch;
  gap: 10px;
  width: 100%;
  div {
    width: 100%;
  }
`

export const StyledTextarea = styled.textarea<{ error?: boolean }>`
  min-height: 40px;
  max-height: 120px;
  width: 100%;

  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.error ? "red" : "#ddd")};
  background: transparent;
  color: white;
  border-radius: 10px;
`
