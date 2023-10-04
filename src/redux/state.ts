import {v1} from 'uuid';

// export const state: StateType = {
//     profilePage: {
//         posts: [
//             {id: v1(), text: 'Hello World!', likeCount: 11},
//             {id: v1(), text: 'Hello World!', likeCount: 6},
//             {id: v1(), text: 'Hello World!', likeCount: 5},
//             {id: v1(), text: 'Hello World!', likeCount: 1},
//         ],
//         newPostText: ''
//     },
//     posts: [
//         {id: v1(), text: 'Hello World!', likeCount: 11},
//         {id: v1(), text: 'Hello World!', likeCount: 6},
//         {id: v1(), text: 'Hello World!', likeCount: 5},
//         {id: v1(), text: 'Hello World!', likeCount: 1},
//     ],
//     users: [
//         {
//             id: v1(),
//             name: 'Stas',
//             message: ['Hello Stas', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
//         },
//         {
//             id: v1(),
//             name: 'Petia',
//             message: ['Hello Petia', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
//         },
//         {
//             id: v1(),
//             name: 'Vasia',
//             message: ['Hello Vasia', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
//         },
//         {
//             id: v1(),
//             name: 'Kateryna',
//             message: ['Hello Kateryna', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
//         },
//         {
//             id: v1(),
//             name: 'Yana',
//             message: ['Hello Yana', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
//         }
//     ]
// }
//
// export const addPost = (text: string) => {
//     if(state.profilePage.newPostText.trim() !== ''){
//         state.profilePage.posts.push({id: v1(), text: text, likeCount: 0})
//         rerenderEntireTree()
//         state.profilePage.newPostText = ''
//     }
// }
//
// export const updateNewPostText = (text: string) => {
//     state.profilePage.newPostText = text
//     rerenderEntireTree()
// }
//
// let rerenderEntireTree = ()=> {}
//
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }

export type UsersType = {
    id: string
    name: string
    message: string[]
}[]
export type PostType = {
    id: string
    text: string
    likeCount: number
}
export type StateType = {
    profilePage: ProfilePageType
    posts: PostType[]
    users: UsersType
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
    _rerenderEntireTree: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), text: 'Hello World!', likeCount: 11},
                {id: v1(), text: 'Hello World!', likeCount: 6},
                {id: v1(), text: 'Hello World!', likeCount: 5},
                {id: v1(), text: 'Hello World!', likeCount: 1},
            ],
            newPostText: ''
        },
        posts: [
            {id: v1(), text: 'Hello World!', likeCount: 11},
            {id: v1(), text: 'Hello World!', likeCount: 6},
            {id: v1(), text: 'Hello World!', likeCount: 5},
            {id: v1(), text: 'Hello World!', likeCount: 1},
        ],
        users: [
            {
                id: v1(),
                name: 'Stas',
                message: ['Hello Stas', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
            },
            {
                id: v1(),
                name: 'Petia',
                message: ['Hello Petia', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
            },
            {
                id: v1(),
                name: 'Vasia',
                message: ['Hello Vasia', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
            },
            {
                id: v1(),
                name: 'Kateryna',
                message: ['Hello Kateryna', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
            },
            {
                id: v1(),
                name: 'Yana',
                message: ['Hello Yana', 'Hi', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorum ea eius excepturi hic illo inventore itaque iure, libero']
            }
        ]
    },
    getState() {
        return this._state
    },
    addPost () {
        if(this._state.profilePage.newPostText.trim() !== ''){
            this._state.profilePage.posts.push({id: v1(), text: this._state.profilePage.newPostText, likeCount: 0})
            this._rerenderEntireTree(this._state)
            this._state.profilePage.newPostText = ''
        }
    },
    updateNewPostText (text: string)  {
        this._state.profilePage.newPostText = text
        this._rerenderEntireTree(this._state)
    },
    _rerenderEntireTree () {},
    subscribe (observer: (state: StateType) => void)  {
        this._rerenderEntireTree = observer
    }
}
