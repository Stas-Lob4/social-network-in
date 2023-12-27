import { instance } from "../../../api/api-utils"

export const dialogsApi = {
  getDialog() {
    return instance.get("dialogs")
  },
  getMessages(userId: number) {
    return instance.get(`dialogs/${userId}/messages`)
  },
  addMessage(userId: number, data: DataAddMessageType) {
    return instance.post(`dialogs/${userId}/messages`, data)
  },
  deleteMessage(messageId: string) {
    return instance.delete(`dialogs/messages/${messageId}`)
  },
}

type DataAddMessageType = {
  body: string
}
