import { Dispatch } from "redux"
import { authApi, LoginDataType } from "../../api/auth-api"
import { AppDispatch } from "../../../../app/store"
import { profileApi } from "../../../profile/api/profile-api"
import { securityApi } from "../../../../api/securityApi"
import { appActions } from "../../../../app/appReducer"
import { authActions } from "./authReducer"
import { profileActions } from "../../../profile/model/profileReducer"

export const setAuthUserDataTC = () => (dispatch: AppDispatch) => {
  dispatch(appActions.setAppInitialized({ initialApp: true }))
  authApi
    .getAuth()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(
          authActions.setUserInfo({
            userId: response.data.data.id,
            email: response.data.data.email,
            login: response.data.data.login,
          }),
        )
        profileApi.getProfile(response.data.data.id).then((res) => {
          dispatch(profileActions.setUserProfile(res.data))
        })
      }
    })
    .finally(() => dispatch(appActions.setAppInitialized({ initialApp: false })))
}

export const loginProfileTC = (data: LoginDataType) => (dispatch: AppDispatch) => {
  authApi.addAuth(data).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserDataTC())
    } else if (res.data.resultCode === 10) {
      dispatch(getCaptchaUrlTC())
    }
  })
}

export const logoutProfileTC = () => (dispatch: AppDispatch) => {
  authApi.deleteAuth().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(authActions.logout())
    }
  })
}

export const getCaptchaUrlTC = () => async (dispatch: AppDispatch) => {
  const res = await securityApi.getCaptchaUrl()
  const captchaUrl = res.data.url
  dispatch(authActions.getCaptchaUrl(captchaUrl))
}
