import { v1 } from "uuid"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { profileThunks } from "./profileThunks"

const initialState = {
  profile: null,
  posts: [
    { id: v1(), text: "Hello World!", likeCount: 11 },
    { id: v1(), text: "Hello World!", likeCount: 6 },
    { id: v1(), text: "Hello World!", likeCount: 5 },
    { id: v1(), text: "Hello World!", likeCount: 1 },
  ],
  status: "",
} as ProfilePageType

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<{ text: string }>) => {
      state.posts = [...state.posts, { id: v1(), text: action.payload.text, likeCount: 0 }]
    },
    updatePost: (state, action: PayloadAction<{ text: string; postId: string }>) => {
      state.posts = state.posts.map((p) => (p.id === action.payload.postId ? { ...p, text: action.payload.text } : p))
    },
    removePost: (state, action: PayloadAction<{ id: string }>) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload.id)
    },
    setUserProfile: (state, action: PayloadAction<{ profile: ProfileType }>) => {
      state.profile = action.payload.profile
    },
    setUserStatus: (state, action: PayloadAction<{ status: string }>) => {
      state.status = action.payload.status
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileThunks.fetchUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(profileThunks.fetchUserStatusProfile.fulfilled, (state, action) => {
        state.status = action.payload.status
      })
      .addCase(profileThunks.updateUserStatusProfile.fulfilled, (state, action) => {
        state.status = action.payload.status
      })
      .addCase(profileThunks.updateUserInfoProfile.fulfilled, (state, action) => {
        state.profile = { userId: action.payload.userId, photos: action.payload.photos, ...action.payload.updateData }
      })
      .addCase(profileThunks.updateUserPhotoProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
  },
})

export const profileReducer = slice.reducer
export const profileActions = slice.actions

export type PostType = {
  id: string
  text: string
  likeCount: number
}

export type ProfileType = {
  aboutMe: string | ""
  contacts: ProfileContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: "" | string
  fullName: string
  userId: number
  photos: {
    small: null | string
    large: null | string
  }
}

export type PhotosType = {
  small: null | string
  large: null | string
}

export type ProfileContactsType = {
  facebook: string | ""
  website: string | ""
  vk: string | ""
  twitter: string | ""
  instagram: string | ""
  youtube: string | ""
  github: string | ""
  mainLink: string | ""
}

export type ProfilePageType = {
  profile: null | ProfileType
  posts: PostType[]
  status: string
}
