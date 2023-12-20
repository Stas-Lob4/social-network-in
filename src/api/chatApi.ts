const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}

let ws: WebSocket | null = null
type EventsNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
    setTimeout(createChannel, 3000)
}

const createChannel = () => {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('message', messagesHandler)
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messagesHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const messagesHandler = (e: MessageEvent) => {
    let newMessage = JSON.parse(e.data)
    subscribers['messages-received'].forEach(s => s(newMessage))
}
const notifySubscribersAboutStatus = (status: ChatStatusType) => {
    subscribers['status-changed'].forEach(s => s(status))
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('REFRESH PAGE')
}

export const chatApi = {
    start(){
        createChannel()
    },
    stop(){
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        ws?.close()
        cleanUp()
    },
    subscribe(eventName: EventsNamesType,callback: CallbackType){
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => { // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback) }
    },
    unsubscribe(eventName: EventsNamesType,callback: CallbackType){
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string){
        ws?.send(message)
    }
}

type CallbackType = MessagesReceivedSubscriberType | StatusChangedSubscriberType
type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChangedSubscriberType = (status: ChatStatusType) => void
export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export type ChatStatusType = 'pending' | 'ready' | 'error'