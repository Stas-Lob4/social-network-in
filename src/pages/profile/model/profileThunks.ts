import { profileApi } from "../api/profile-api"
import { ProfileType } from "./profileReducer"
import { createAppAsyncThunk, handleServerAppError, thunkTryCatch } from "../../../utils"
import { appActions } from "../../../app/appReducer"
import { ResultCode } from "../../../common/enums"

const fetchUserProfile = createAppAsyncThunk<{ profile: ProfileType }, number>(
  "profile/fetchUserProfile",
  async (id, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
      dispatch(appActions.setAppStatus({ status: "loading" }))
      const res = await profileApi.getProfile(id)
      console.log("setProfile", res.data)
      return { profile: res.data }
    }).finally(() => dispatch(appActions.setAppStatus({ status: "succeeded" })))
  },
)

const fetchUserStatusProfile = createAppAsyncThunk<{ status: string }, number>(
  "profile/fetchUserStatusProfile",
  async (id, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
      dispatch(appActions.setAppStatus({ status: "loading" }))
      const res = await profileApi.getStatusProfile(id)
      return { status: res.data }
    }).finally(() => dispatch(appActions.setAppStatus({ status: "succeeded" })))
  },
)

const updateUserStatusProfile = createAppAsyncThunk<{ status: string }, string>(
  "profile/updateUserStatusProfile",
  async (status, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
      dispatch(appActions.setAppStatus({ status: "loading" }))
      const res = await profileApi.updateStatusProfile(status)
      if (res.data.resultCode === ResultCode.Success) {
        dispatch(appActions.setAppStatus({ status: "succeeded" }))
        return { status }
      } else {
        handleServerAppError(res.data, dispatch)
        return rejectWithValue(null)
      }
    })
  },
)
export const profileThunks = { fetchUserProfile, fetchUserStatusProfile, updateUserStatusProfile }
