import React, { FC } from "react"
import styles from "../../Users.module.css"
import { NavLink } from "react-router-dom"
import user_icon from "../../../../../assets/img/user-icon.jpg"
import { useAppSelector } from "../../../../../app/store"
import { UserType } from "../../../model/usersReducer"
import { useActions } from "../../../../../hooks/useActions"
import { usersThunks } from "../../../model/usersThunks"
import { UserItemImageStyled, UserItemNavLinkStyled, UserItemStyled, UserNameStyled } from "./UserItemStyled"
import { Button } from "../../../../../component/Button"

type PropsType = {
  user: UserType
}
export const UserItem: FC<PropsType> = ({ user }) => {
  const followingInProgress = useAppSelector((state) => state.usersReducer.followingInProgress)
  const { follow, unfollow } = useActions({ ...usersThunks })

  const unfollowHandler = () => unfollow(user.id)
  const followHandler = () => follow(user.id)

  return (
    <UserItemStyled key={user.id}>
      <UserItemNavLinkStyled to={`/profile/${user.id}`}>
        <UserItemImageStyled alt={"img user"} src={user.photos.large != null ? user.photos.large : user_icon} />
      </UserItemNavLinkStyled>
      <UserNameStyled>{user.name.length <= 13 ? user.name : user.name.substring(0, 12) + "..."}</UserNameStyled>
      {user.followed ? (
        <Button disabled={followingInProgress.some((id) => id === user.id)} onClick={unfollowHandler} color="red">
          Unfollow
        </Button>
      ) : (
        <Button disabled={followingInProgress.some((id) => id === user.id)} onClick={followHandler} color="green">
          Follow
        </Button>
      )}
    </UserItemStyled>
  )
}
