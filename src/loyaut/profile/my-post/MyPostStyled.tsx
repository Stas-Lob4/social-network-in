import styled from 'styled-components';

export const InputBox = styled.div`
  position: fixed;
`
export const TextArea = styled.textarea`
  width: 500px;
  height: 50px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 5px;
  padding: 5px;
`

export const ButtonInput = styled.button`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  color: white;
  &:hover{
    background-color: white;
    color: black;
  }
`