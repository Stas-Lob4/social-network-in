import { Dispatch } from "redux"
import {BaseResponseType} from '../common/types/common.types';
import {appActions} from '../app/appReducer';

/**
 *
 * @param data
 * @param dispatch
 * @param isShowGlobalError
 */
export const handleServerAppError = <D>(
  data: BaseResponseType<D>,
  dispatch: Dispatch,
  isShowGlobalError: boolean = true,
) => {
  if (isShowGlobalError) {
    const error = data.messages.length ? { error: data.messages[0] } : { error: "Some error occurred" }
    dispatch(appActions.setAppError(error))
  }
  dispatch(appActions.setAppStatus({ status: "failed" }))
}
