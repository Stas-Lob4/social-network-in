import {addPostAC, PostType, ProfilePageType, profileReducer, ProfileType, removePostAC} from './profile-reducer';



let state: ProfilePageType = {
    posts: [
        {id: '1', text: 'Hi, how are you?', likeCount: 12},
        {id: '2', text: 'It\'s my first post', likeCount: 11},
        {id: '3', text: 'Blabla', likeCount: 11},
        {id: '4', text: 'Dada', likeCount: 11}
    ],
    profile: null,
    newPostText: '',
    status: ''
}

it('length of posts should be incremented', () => {
    let action = addPostAC('New Post');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    let action = addPostAC("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.posts[4].text).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    let action = removePostAC('1');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = removePostAC('1000');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});