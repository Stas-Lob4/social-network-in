import {ProfilePageType, profileReducer, ProfileType,} from '../profileReducer';
import {profileActions} from '../profileReducer';


let state: ProfilePageType = {
    posts: [
        {id: '1', text: 'Hi, how are you?', likeCount: 12},
        {id: '2', text: 'It\'s my first post', likeCount: 11},
        {id: '3', text: 'Blabla', likeCount: 11},
        {id: '4', text: 'Dada', likeCount: 11}
    ],
    profile: null,
    status: ''
}

it('length of posts should be incremented', () => {
    let action = profileActions.addPost({text: 'New Post'});

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    let action = profileActions.addPost({text: 'it-kamasutra.com'});

    let newState = profileReducer(state, action);

    expect(newState.posts[4].text).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
    let action = profileActions.removePost({id: '1'});

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = profileActions.removePost({id: '1000'});

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});