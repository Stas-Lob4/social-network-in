import { instance } from "../../../api/api-utils"

export const usersApi = {
  getUsers() {
    return instance.get(`/users`)
  },
  getCurrentPage(pageNumber: number, pageSize: number) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
}
