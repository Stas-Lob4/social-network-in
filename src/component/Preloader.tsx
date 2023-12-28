import React from "react"
import styled from "styled-components"
import { HashLoader } from "react-spinners"

export const Preloader = () => {
  return (
    <PreloaderBox>
      <HashLoader size={250} />
    </PreloaderBox>
  )
}

export const PreloaderBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`
