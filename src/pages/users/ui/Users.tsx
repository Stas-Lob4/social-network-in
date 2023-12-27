import React, { FC, useEffect } from "react"
import user_icon from "../../../assets/img/user-icon.jpg"
import styles from "./Users.module.css"
import ReactPaginate from "react-paginate"
import { HashLoader } from "react-spinners"
import { Navigate, NavLink } from "react-router-dom"
import { usersThunks } from "../model/usersThunks"
import { useActions } from "../../../hooks/useActions"
import { useAppSelector } from "../../../app/store"

export const Users: FC = React.memo(() => {
  const users = useAppSelector((state) => state.usersReducer.users)
  const totalCount = useAppSelector((state) => state.usersReducer.usersTotalCount)
  const isAuth = useAppSelector((state) => state.authReducer.isAuth)
  const pageSize = useAppSelector((state) => state.usersReducer.pageSize)
  const followingInProgress = useAppSelector((state) => state.usersReducer.followingInProgress)

  const { fetchUsers, follow, unfollow, fetchUserCountForPagination } = useActions({ ...usersThunks })

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers()
    }
  }, [])

  const onPageChanged = (pageNumber: number) => {
    const correctSize = 10
    fetchUserCountForPagination({ pageNumber: pageNumber, pageSize: pageSize <= 10 ? pageSize : correctSize })
  }

  if (!isAuth) {
    return <Navigate to={"/login"} />
  }

  return (
    <div className={styles.container}>
      {users.length === 0 ? (
        <div className={styles.preloader_box}>
          <HashLoader color={"red"} size={250} />
        </div>
      ) : (
        <div>
          <ReactPaginate
            pageCount={Math.ceil(totalCount / pageSize)}
            className={styles.pagination}
            onPageChange={(selectedItem: { selected: number }) => onPageChanged(selectedItem.selected + 1)}
          />
          <div className={styles.users_container}>
            {users.map((u) => (
              <div key={u.id} className={styles.user_box}>
                <NavLink to={`/profile/${u.id}`}>
                  <img alt={"img user"} src={u.photos.large != null ? u.photos.large : user_icon} />
                </NavLink>
                <h3>{u.name.length <= 13 ? u.name : u.name.substring(0, 12) + "..."}</h3>
                {u.followed ? (
                  <button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    onClick={() => unfollow(u.id)}
                    className={styles.unfollow_button}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some((id) => id === u.id)}
                    onClick={() => follow(u.id)}
                    className={styles.follow_button}
                  >
                    Follow
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
})
