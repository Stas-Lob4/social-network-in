import {ActionType, ProfilePageType} from './state';
import {v1} from 'uuid';

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST' :
            return {posts: [...state.posts, {id: v1(), text: state.newPostText, likeCount: 0}],
                    newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.text}
        default:
            return state
    }
}

export type ActionProfileReducerType = AddPostActionType | UpdateNewPostTextActionType

type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', text} as const
}