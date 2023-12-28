import styled from "styled-components"

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  max-width: 300px;
  align-items: stretch;
  justify-content: stretch;
  gap: 10px;
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const StyledInput = styled.input<{ error?: boolean }>`
  height: 40px;

  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.error ? "red" : "#ddd")};
  background: transparent;
  color: white;
  border-radius: 10px;
`

export const StyledSelect = styled.select<{ error?: boolean }>`
  height: 40px;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.error ? "red" : "#ddd")};
  border-radius: 10px;
  background-color: transparent;
  color: white;
  option {
    color: black;
  }
`

export const Button = styled.button`
  height: 40px;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 10px;

  &:hover {
    background: white;
    color: black;
  }
`

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`
