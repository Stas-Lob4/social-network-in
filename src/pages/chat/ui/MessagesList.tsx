import React, { useEffect, useRef, useState } from "react"
import { useAppSelector } from "../../../app/store"
import { Message } from "./Message"
import { ChatMessagesList } from "./ChatStyled"

export const MessagesList: React.FC = React.memo(() => {
  let messages = useAppSelector((state) => state.chatReducer.messages)
  const messagesAnchorRef = useRef<HTMLDivElement>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget
    if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 300) {
      !isAutoScroll && setIsAutoScroll(true)
    } else {
      isAutoScroll && setIsAutoScroll(false)
    }
  }

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <div onScroll={scrollHandler}>
      <ChatMessagesList>
        {messages.map((m, i) => (
          <Message message={m} key={i} />
        ))}
        <div ref={messagesAnchorRef}></div>
      </ChatMessagesList>
    </div>
  )
})
