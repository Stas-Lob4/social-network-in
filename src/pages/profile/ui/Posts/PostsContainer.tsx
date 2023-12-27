import { Posts } from "./Posts"
import { AppDispatch } from "../../../../app/store"
import { useDispatch } from "react-redux"
import { profileActions } from "../../model/profileReducer"

export const MyPostContainer = () => {
  const dispatch = useDispatch<AppDispatch>()
  const addPost = (text: string) => {
    dispatch(profileActions.addPost({ text }))
  }
  return <Posts addPost={addPost} />
}
