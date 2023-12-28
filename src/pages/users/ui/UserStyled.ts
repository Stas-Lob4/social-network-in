import styled from "styled-components"
import ReactPaginate from "react-paginate"

export const UsersStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  margin: 20px;
`

export const UsersFilterContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const UsersListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 35px;
  justify-content: center;
`
export const ReactPaginateStyled = styled(ReactPaginate)`
  display: flex;
  gap: 20px;
  justify-content: center;

  border: 1px solid white;
  border-radius: 20px;

  li {
    a {
      box-sizing: border-box;
      color: white;
      &:hover {
        color: #c53a3a;
      }
      &:active {
        color: #c53a3a;
      }
    }
  }
`
