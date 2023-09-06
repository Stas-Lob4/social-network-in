import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderStyled = styled.div`
  height: 50px;
  align-content: center;
`
export const BoxLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
`
type ImageProsType = {
    height: string
    width: string
}
export const Image = styled.img<ImageProsType>`
  height: ${props => props.height};
  width: ${props => props.width};
  margin: auto 10px;
`
export const ButtonStyled = styled.button`
  margin-right: 10px;
  height: 30px;
  width: 100px;
  background: transparent;
  border-radius: 5px;
  border: 1px solid red;
  color: white;
  &:hover {
    background: red;
    text-decoration-line: underline;
  }
`
