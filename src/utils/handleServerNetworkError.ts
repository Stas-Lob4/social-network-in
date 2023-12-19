import axios from "axios"
import {AppDispatch} from '../redux/store';

export const handleServerNetworkError = (err: unknown, dispatch: AppDispatch): void => {
  let errorMessage = "Some error occurred"
  if (axios.isAxiosError(err)) {
    errorMessage = err.response?.data?.message || err?.message || errorMessage
  } else if (err instanceof Error) {
    errorMessage = `Native error: ${err.message}`
  } else {
    errorMessage = JSON.stringify(err)
  }
  // dispatch(appActions.setAppError({ error: errorMessage }))
  // dispatch(appActions.setAppStatus({ status: "failed" }))
}
