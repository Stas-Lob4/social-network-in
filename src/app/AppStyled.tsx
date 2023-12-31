import styled from "styled-components"

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d2d2b;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
`
export const AppHeaderStyled = styled.header`
  max-width: 1150px;
  min-height: 50px;
  width: 100%;
`
export const AppMainStyled = styled.main`
  display: flex;
  gap: 10px;
  flex-direction: row;
  max-width: 1150px;
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1;
  align-items: stretch; /* Добавьте это свойство */
`
export const AppFooterStyled = styled.footer`
  width: 100%;
  max-width: 1150px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AppMainRoutesStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
`

export const AppMainNavbarStyled = styled.div`
  max-width: 150px;
  width: 100%;
`
