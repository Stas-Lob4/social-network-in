import { Navigate } from "react-router-dom"
import { FC, ReactComponentElement } from "react"
import { useAppSelector } from "../store"
import { isAuthSelector } from "../../pages/login/model/auth/authSelectors"

type ProtectedRoutePropsType = {
  children: ReactComponentElement<any>
}
export const ProtectedRoute: FC<ProtectedRoutePropsType> = ({ children }) => {
  const isAuth = useAppSelector(isAuthSelector)
  return isAuth ? children : <Navigate to="/login" />
}
