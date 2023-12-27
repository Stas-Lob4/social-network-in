import { instance } from "../../../api/api-utils"

export const profileApi = {
  getProfile(id: number) {
    return instance.get(`profile/${id}`)
  },
  getStatusProfile(id: number) {
    return instance.get(`profile/status/${id}`)
  },
  updateStatusProfile(status: string) {
    return instance.put(`profile/status`, { status: status })
  },
}
