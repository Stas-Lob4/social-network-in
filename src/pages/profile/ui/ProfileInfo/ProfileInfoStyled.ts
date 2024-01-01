import styled from "styled-components"

export const ProfileInfoStyled = styled.section`
  min-width: 100%;
`
export const ProfileInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50px;
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
`
export const ProfileTitle = styled.h2``
export const ContactsBox = styled.div`
  min-height: 90px;

  background: #84c0b9;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  max-width: 270px;
`

export const ContactsTitle = styled.h2`
  text-align: center;
`
export const ContactsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap;
  max-height: 180px;
`
export const ContactsItem = styled.li`
  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: black;
    opacity: 0.2;
  }
`

export const ProfileInfoBox = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 200px;
  background: rgba(56, 54, 54, 0.7);
  padding: 15px;
  border-radius: 15px;
`

export const ButtonInput = styled.button``
