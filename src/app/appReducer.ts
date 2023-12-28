import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  initialApp: false,
  status: "idle" as RequestStatusType,
  error: null as string | null,
}

export type InitialStateType = typeof initialState

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status
    },
    setAppError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error
    },
    setAppInitialized: (state, action: PayloadAction<{ initialApp: boolean }>) => {
      state.initialApp = action.payload.initialApp
    },
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
