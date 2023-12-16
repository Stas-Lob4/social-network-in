import {v1} from 'uuid';

const initState: ProfilePageType =  {
    profile: null,
    posts: [
        {id: v1(), text: 'Hello World!', likeCount: 11},
        {id: v1(), text: 'Hello World!', likeCount: 6},
        {id: v1(), text: 'Hello World!', likeCount: 5},
        {id: v1(), text: 'Hello World!', likeCount: 1},
    ],
    status: ''
}

export const profileReducer = (state = initState, action: ActionProfileReducerType) => {
    switch (action.type) {
        case 'ADD-POST' :
            return {...state, posts: [...state.posts, {id: v1(), text: action.text, likeCount: 0}]}
        case 'REMOVE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.text}
        case 'SET-USER-PROFILE':{
            return {...state, profile: {...action.profile}}
        }
        case 'SET-USER-STATUS':{
            return {...state, status: action.status}
        }
        default:
            return state
    }
}


type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = (text: string) => {
    return {type: 'ADD-POST', text} as const
}
type RemovePostActionType = ReturnType<typeof removePostAC>
export const removePostAC = (id: string) => {
    return {type: 'REMOVE-POST', id} as const
}

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', text} as const
}

type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}

type SetUserStatusActionType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (status: string) => {
    return {type: 'SET-USER-STATUS', status} as const
}

export type PostType = {
    id: string
    text: string
    likeCount: number
}

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

export type ProfilePageType = {
    profile: ProfileType | null
    posts: PostType[]
    status: string
}

export type ActionProfileReducerType = AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType
    | SetUserStatusActionType
    | RemovePostActionType