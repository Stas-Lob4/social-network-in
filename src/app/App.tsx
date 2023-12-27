import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navbar } from "../component/navbar/Navbar"
import HeaderContainer from "../component/header/HeaderContainer"
import { HashLoader } from "react-spinners"
import { setAuthUserDataTC } from "../pages/login/model/auth/authThunk"
import { AppDispatch, useAppSelector } from "./store"
import { AppHeaderStyled, AppMainNavbarStyled, AppMainRoutesStyled, AppMainStyled, AppStyled } from "./AppStyled"
import { Outlet } from "react-router-dom"
import { initialAppSelector } from "./appSelectors"

export const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  const initialApp = useAppSelector(initialAppSelector)

  useEffect(() => {
    if (!initialApp) {
      dispatch(setAuthUserDataTC())
    }
  }, [])

  if (initialApp) {
    return (
      <AppStyled>
        <HashLoader color={"red"} size={250} />
      </AppStyled>
    )
  }

  return (
    <AppStyled>
      <AppHeaderStyled>
        <HeaderContainer />
      </AppHeaderStyled>
      <AppMainStyled>
        <AppMainNavbarStyled>
          <Navbar />
        </AppMainNavbarStyled>
        <AppMainRoutesStyled>
          <Outlet />
        </AppMainRoutesStyled>
      </AppMainStyled>
    </AppStyled>
  )
}
