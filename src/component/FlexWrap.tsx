import styled from 'styled-components';



type FlexWrapType = {
    direction?: "row" | "column"
    justify?: "space-between" | "space-around"
    align?: "center" | "baseline"
    width?: string
    height?: string
}
export const FlexWrap = styled.div<FlexWrapType>`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`