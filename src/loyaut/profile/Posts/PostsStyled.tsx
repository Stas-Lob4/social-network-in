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
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 500px;
    scrollbar-color: #d4aa70 #e4e4e4;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: #9a9595;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-image: linear-gradient(180deg, #50474a 0%, #6a779f 99%);
        //box-shadow: inset 2px 2px 5px 0 rgba(#fff , 0.5);
    }
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



