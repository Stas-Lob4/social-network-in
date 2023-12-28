import React, { FC, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { usersThunks } from "../model/usersThunks"
import { useActions } from "../../../hooks/useActions"
import { useAppSelector } from "../../../app/store"
import { FilterForm } from "../../../component/FilterForm/FilterForm"
import { FilterType } from "../model/usersReducer"
import { ReactPaginateStyled, UsersFilterContainer, UsersStyled } from "./UserStyled"
import { UsersList } from "./UserList/UsersList"

export const Users: FC = () => {
  const correctSize = 10
  const users = useAppSelector((state) => state.usersReducer.users)
  const totalCount = useAppSelector((state) => state.usersReducer.usersTotalCount)
  const isAuth = useAppSelector((state) => state.authReducer.isAuth)
  const pageSize = useAppSelector((state) => state.usersReducer.pageSize)
  const filter = useAppSelector((state) => state.usersReducer.filter)

  const { fetchUsers, fetchUserCountForPagination } = useActions({ ...usersThunks })

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers()
    }
  }, [])

  const onPageChanged = (pageNumber: number) => {
    fetchUserCountForPagination({
      pageNumber: pageNumber,
      pageSize: pageSize <= 10 ? pageSize : 10,
      term: filter.term,
      friend: filter.friend,
    })
  }
  const onFilterChanged = (filter: FilterType) => {
    fetchUserCountForPagination({
      pageNumber: 1,
      pageSize: pageSize <= 10 ? pageSize : correctSize,
      term: filter.term,
      friend: filter.friend,
    })
  }

  if (!isAuth) {
    return <Navigate to={"/login"} />
  }

  return (
    <UsersStyled>
      <ReactPaginateStyled
        pageCount={Math.ceil(totalCount / pageSize)}
        onPageChange={(selectedItem: { selected: number }) => onPageChanged(selectedItem.selected + 1)}
      />
      <UsersFilterContainer>
        <FilterForm onFilterChanged={onFilterChanged} />
      </UsersFilterContainer>
      <UsersList />
    </UsersStyled>
  )
}
