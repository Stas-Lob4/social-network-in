import { profileApi, UpdateDataInfoProfileType } from "../api/profile-api"
import { PhotosType, ProfileType } from "./profileReducer"
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

const updateUserInfoProfile = createAppAsyncThunk<
  { updateData: UpdateDataInfoProfileType; userId: number; photos: PhotosType },
  { updateData: UpdateDataInfoProfileType; userId: number; photos: PhotosType }
>("profile/updateUserInfoProfile", async (props, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    const res = await profileApi.updateInfoProfile(props.updateData)
    console.log("Thunk", res.data)
    if (res.data.resultCode === ResultCode.Success) {
      dispatch(appActions.setAppStatus({ status: "succeeded" }))
      console.log("UpdateInfoProfile", props.updateData)
      return { updateData: props.updateData, userId: props.userId, photos: props.photos }
    } else {
      handleServerAppError(res.data, dispatch)
      return rejectWithValue(null)
    }
  })
})

const updateUserPhotoProfile = createAppAsyncThunk<
  { profile: ProfileType },
  {
    photo: File
    userId: number
  }
>("profile/updateUserPhotoProfile", async (props, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    dispatch(appActions.setAppStatus({ status: "loading" }))
    const res = await profileApi.updatePhotoProfile(props.photo)
    console.log(res)
    if (res.data.resultCode === ResultCode.Success) {
      dispatch(appActions.setAppStatus({ status: "succeeded" }))
      const newDataInfoProfile = await profileApi.getProfile(props.userId)
      console.log("Profile", { profile: newDataInfoProfile.data })
      return { profile: newDataInfoProfile.data }
    } else {
      handleServerAppError(res.data, dispatch)
      return rejectWithValue(null)
    }
  })
})

export const profileThunks = {
  fetchUserProfile,
  fetchUserStatusProfile,
  updateUserStatusProfile,
  updateUserInfoProfile,
  updateUserPhotoProfile,
}
