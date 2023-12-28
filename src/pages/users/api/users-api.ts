import { instance } from "../../../api/api-utils"

export const usersApi = {
  getUsers() {
    return instance.get(`/users`)
  },
  getCurrentPage(pageNumber: number, pageSize: number, term: string = "", friend: boolean | null = null) {
    console.log("API", pageNumber, pageSize, term, friend)
    return instance.get(
      `/users?page=${pageNumber}
                        &count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`),
    )
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
}
