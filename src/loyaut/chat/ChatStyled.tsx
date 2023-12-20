import { styled } from "styled-components"

export const ChatStyled = styled.section`
    padding: 30px;
    width: 100%;
    height: 100%;
`

export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ChatMessagesList = styled.ul`
    max-height: 70vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: seashell;
    padding: 20px;
    border-radius: 5px;
`

export const MessageItem = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
    max-height: 70px;
    border-radius: 20px;
    background: black;
    max-width: 60%;
    padding: 5px 30px 5px 5px;
`
export const MyMessageItem = styled.li`
    align-self: end;
    display: flex;
    flex-direction: row-reverse;
    justify-content: revert;
    align-items: center;
    gap: 30px;
    max-height: 70px;
    border-radius: 20px;
    background: dodgerblue;
    min-width: 60%;
    padding: 5px 5px 5px 30px;
`

export const MessageBoxText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 5px;
`

export const UserPhotoToMessage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 20px;
`
export const UserNameToMessage = styled.div`
    font-size: 13px;
    line-height: 1;
`
export const MyUserNameToMessage = styled.div`
    font-size: 13px;
    align-self: end;
    line-height: 1;
`

export const TextMessage = styled.div`
    font-size: 18px;
    align-self: start;
    line-height: 1;
`
export const MyTextMessage = styled.div`
    font-size: 18px;
    align-self: end;
    justify-self: end;
    line-height: 1;
`

export const InputMessageContainer = styled.div`
    margin-top: 5px;
    width: 100%;
    height: 50px;
    
    div{
        position: relative;
        display: flex;
        align-items: center;
        textarea{
            padding: 10px 50px 10px 10px;
            border-radius: 10px;
            font-size: 15px;
            min-width: 100%;
            height: 50px;
        }
        button{
            position: absolute;
            right:10px;
            background: none;
            border: none;
            font-size: 30px;
            height: 40px;
            width: 40px;
            border-radius: 100%;
        }
        button:hover {
            background: black;
            color: white;
        }
    }
`