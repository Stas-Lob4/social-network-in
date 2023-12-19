import styled from 'styled-components';


export const DialogStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
`

export const DialogList = styled.ul`
    background: #39625f;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    overflow-y: hidden;
    transition: all 0.3s ease 0s;
`

export const DialogItem = styled.li`
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    padding: 5px;
    background: black;
    color: white;
    border-radius: 5px;
    overflow-y: hidden;
    
    button {
        width: 30px;
        height: 30px;
        border-radius: 100%;
    }
    button:hover {
        background: red;
        color: white;
    }
`

export const DialogInputBox = styled.div`
    width: 100%;
    height: 70px;
    background: #39625f;
    border-radius: 5px;
    padding: 10px;
    div{
        display: flex;
        align-items: center;
        position: relative;
        
        textarea {
            width: 100%;
            height: 50px;
            border: 1px solid  black;
            border-radius: 5px;
            padding: 5px 40px 5px 20px;
            font-size: 15px;
        }

        button {
            position: absolute;
            right: 5px;
            border: none;
            background: white;
            height: 30px;
            width: 30px;
            border-radius: 5px;
        }
        button:hover {
            background: black;
            color: white;
        }
    }
 
`