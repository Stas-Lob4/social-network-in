import styled from "styled-components"

export const ProfileStyled = styled.section`
  max-width: 100%;
  overflow-y: auto;
  scrollbar-color: #d4aa70 #e4e4e4;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #2d2d2b;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-image: linear-gradient(180deg, #50474a 0%, #6a779f 99%);
    //box-shadow: inset 2px 2px 5px 0 rgba(#fff , 0.5);
  }
`

export const ProfileContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const BorderImage = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  border: 1px solid transparent;
`
