import React, { FC } from "react"
import { UsersListStyled } from "../UserStyled"
import { ErrorTitle } from "../../../../component/ErrorTitle"
import { useAppSelector } from "../../../../app/store"
import { UserItem } from "./UserItem/UserItem"

export const UsersList: FC = () => {
  const users = useAppSelector((state) => state.usersReducer.users)

  return (
    <UsersListStyled>
      {users.length === 0 ? (
        <ErrorTitle title={`Search didn't find anyone`} />
      ) : (
        users.map((user) => <UserItem user={user} />)
      )}
    </UsersListStyled>
  )
}
