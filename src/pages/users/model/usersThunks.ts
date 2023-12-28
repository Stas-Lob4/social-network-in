import { usersApi } from "../api/users-api"
import { FilterType, usersActions, UserType } from "./usersReducer"
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
    dispatch(usersActions.toggleIsFollowingProgress({ isFetching: true, userId }))
    const res = await usersApi.follow(userId)
    if (res.data.resultCode === ResultCode.Success) {
      dispatch(usersActions.toggleIsFollowingProgress({ isFetching: false, userId }))
      return { userId }
    } else {
      handleServerAppError(res.data, dispatch)
      return rejectWithValue(null)
    }
  }).finally(() => dispatch(usersActions.toggleIsFollowingProgress({ isFetching: false, userId })))
})

const unfollow = createAppAsyncThunk<{ userId: number }, number>("users/unfollow", async (userId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    dispatch(usersActions.toggleIsFollowingProgress({ isFetching: true, userId }))
    const res = await usersApi.unfollow(userId)
    if (res.data.resultCode === ResultCode.Success) {
      dispatch(usersActions.toggleIsFollowingProgress({ isFetching: false, userId }))
      return { userId }
    } else {
      handleServerAppError(res.data, dispatch)
      return rejectWithValue(null)
    }
  }).finally(() => dispatch(usersActions.toggleIsFollowingProgress({ isFetching: false, userId })))
})

const fetchUserCountForPagination = createAppAsyncThunk<
  { users: UserType[]; currentPage: number; filter: FilterType; usersTotalCount: number },
  { pageNumber: number; pageSize: number; term: string | ""; friend: boolean | null }
>("users/fetchUserCountForPagination", async (data, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    console.log("THUNK", data.pageNumber, data.pageSize, data.term, data.friend)
    const res = await usersApi.getCurrentPage(data.pageNumber, data.pageSize, data.term, data.friend)
    console.log("RES", res.data)
    return {
      users: res.data.items,
      currentPage: data.pageNumber,
      filter: { term: data.term, friend: data.friend },
      usersTotalCount: res.data.totalCount,
    }
  })
})

export const usersThunks = { fetchUsers, follow, unfollow, fetchUserCountForPagination }
