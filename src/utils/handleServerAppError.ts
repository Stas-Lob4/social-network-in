import { Dispatch } from "redux"
import {setErrorAppAC, setStatusAppAC} from '../redux/reducers/appReducer';

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch) => {
  if (data.messages.length) {
    dispatch(setErrorAppAC(data.messages[0]))
  } else {
    dispatch(setErrorAppAC("Some error occurred" ))
  }
  dispatch(setStatusAppAC("failed" ))
}

export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  data: D
}