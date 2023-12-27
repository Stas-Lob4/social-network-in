import { usersApi } from "../api/users-api"
import { usersActions, UserType } from "./usersReducer"
import { createAppAsyncThunk, handleServerAppError, thunkTryCatch } from "../../../utils"
import { appActions } from "../../../app/appReducer"
import { ResultCode } from "../../../common/enums"

const fetchUsers = createAppAsyncThunk<{ users: UserType[]; totalCount: number }, void>(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {
      dispatch(appActions.setAppStatus({ status: "loading" }))
      const res = await usersApi.getUsers()
      return { users: res.data.items, totalCount: res.data.totalCount }
    }).finally(() => dispatch(appActions.setAppStatus({ status: "succeeded" })))
  },
)

const follow = createAppAsyncThunk<{ userId: number }, number>("users/follow", async (userId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    const res = await usersApi.follow(userId)
    if (res.data.resultCode === ResultCode.Success) {
      dispatch(usersActions.toggleIsFollowingProgress({ isFetching: false, userId }))
      return { userId }
    } else {
      handleServerAppError(res.data, dispatch)
      return rejectWithValue(null)
    }
  })
})

const unfollow = createAppAsyncThunk<{ userId: number }, number>("users/unfollow", async (userId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    const res = await usersApi.unfollow(userId)
    if (res.data.resultCode === ResultCode.Success) {
      dispatch(usersActions.toggleIsFollowingProgress({ isFetching: false, userId }))
      return { userId }
    } else {
      handleServerAppError(res.data, dispatch)
      return rejectWithValue(null)
    }
  })
})

const fetchUserCountForPagination = createAppAsyncThunk<
  { users: UserType[]; currentPage: number },
  { pageNumber: number; pageSize: number }
>("users/fetchUserCountForPagination", async (data, thunkAPI) => {
  const { dispatch } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    const res = await usersApi.getCurrentPage(data.pageNumber, data.pageSize)
    return { users: res.data.items, currentPage: data.pageNumber }
  })
})

export const usersThunks = { fetchUsers, follow, unfollow, fetchUserCountForPagination }
