import styled from 'styled-components';

export const PostsStyled = styled.section`
    
`
export const PostsContainer = styled.section`
    
`
export const PostsTitle = styled.h2`
`

export const PostList = styled.ul`
    margin-top: 5px;
    max-height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
    max-width: 500px;
`

export const InputBox = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const TextArea = styled.input`
    
    min-width: 500px;
    height: 50px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    padding: 5px 40px 5px 5px;
`

export const ButtonInput = styled.button`
    right: 8px;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    border: none;
    background: none;
    color: white;
    
    &:hover {
        background-color: white;
        color: black;
    }
    
    &:disabled{
        opacity: 0.2;
    }
`



