import styled from 'styled-components';

export const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const TextArea = styled.input`
  width: 500px;
  height: 50px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 5px;
  padding: 5px;
`

export const ButtonInput = styled.button`
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 5px;
  border: none;
  color: black;
  &:hover{
    opacity: 0.5;
  }
`