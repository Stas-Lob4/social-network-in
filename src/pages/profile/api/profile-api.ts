import { instance } from "../../../api/api-utils"
import { ProfileContactsType } from "../model/profileReducer"

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
  updateInfoProfile(data: UpdateDataInfoProfileType) {
    const body = {
      aboutMe: data.aboutMe,
      contacts: data.contacts,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      fullName: data.fullName,
    }
    return instance.put(`profile`, body)
  },
}

export type UpdateDataInfoProfileType = {
  aboutMe: string
  contacts: ProfileContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
}
