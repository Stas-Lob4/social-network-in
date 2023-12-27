import React, { FC, useEffect } from "react"
import { TextareaBlock } from "../../../component/TextareaBlock"
import { HashLoader } from "react-spinners"
import { useDispatch } from "react-redux"
import { chatActions, sendMessage, startMessagesListening, stopMessagesListening } from "../model/chatReducer"
import { useAppSelector } from "../../../app/store"
import { MessagesList } from "./MessagesList"
import { ChatStyled, InputMessageContainer, LoaderContainer } from "./ChatStyled"
import { Navigate } from "react-router-dom"

export const Chat: FC = React.memo(() => {
  const status = useAppSelector((state) => state.chatReducer.status)
  const isAuth = useAppSelector((state) => state.authReducer.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stopMessagesListening())
      dispatch(chatActions.clearMessages())
    }
  }, [])

  const sendMessageHandler = (message: string) => {
    if (message.trim() !== "") {
      dispatch(sendMessage(message))
    }
  }

  if (status === "pending") {
    return (
      <ChatStyled>
        <LoaderContainer>
          <HashLoader size={250} />
        </LoaderContainer>
      </ChatStyled>
    )
  } else if (status === "error") {
    return <ChatStyled>{status === "error" && <div>Some error occured. Please refresh the page</div>}</ChatStyled>
  } else if (!isAuth) {
    return <Navigate to={"/login"} />
  }

  return (
    <ChatStyled>
      <MessagesList />
      <InputMessageContainer>
        <TextareaBlock disabled={status !== "ready"} onClick={sendMessageHandler} />
      </InputMessageContainer>
    </ChatStyled>
  )
})
