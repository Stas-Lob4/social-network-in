import React, { ChangeEvent, useState, KeyboardEvent } from "react"
import { Post } from "./Post/Post"
import { ButtonInput, InputBox, PostList, PostsContainer, PostsStyled, PostsTitle, TextArea } from "./PostsStyled"
import { ProfilePageType } from "../../model/profileReducer"
import user_photo from "../../../../assets/img/user-icon.jpg"
import { useAppSelector } from "../../../../app/store"
import { TextareaBlock } from "../../../../component/TextareaBlock"
import { TextAreaStyled } from "../../../../component/TextAreaStyled"

type PostsPropsType = {
  addPost: (text: string) => void
}
export const Posts: React.FC<PostsPropsType> = React.memo(({ addPost }) => {
  const stateProfile = useAppSelector((state) => state.profileReducer)

  const onClickHandler = (text: string) => {
    if (text !== "") {
      addPost(text)
    }
  }

  let profileImage = stateProfile.profile?.photos.large

  const mapMyPosts = stateProfile?.posts.map((m) => (
    <Post id={m.id} text={m.text} likeCount={m.likeCount} profileImage={profileImage} />
  ))
  return (
    <PostsStyled>
      <PostsContainer>
        <PostsTitle>My posts</PostsTitle>
        <TextAreaStyled onClick={onClickHandler} />
        {/*<InputBox>*/}
        {/*  <TextArea*/}
        {/*    placeholder={"Input new post"}*/}
        {/*    value={text}*/}
        {/*    onChange={onChangeHandler}*/}
        {/*    onKeyPress={onClickKeyHandler}*/}
        {/*  />*/}
        {/*  <ButtonInput onClick={onClickHandler}>+</ButtonInput>*/}
        {/*</InputBox>*/}
        <PostList>{mapMyPosts}</PostList>
      </PostsContainer>
    </PostsStyled>
  )
})
