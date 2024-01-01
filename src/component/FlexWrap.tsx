import styled from "styled-components"

type FlexWrapType = {
  gap?: string
  direction?: "row" | "column"
  justify?: "space-between" | "space-around" | "center"
  align?: "center" | "baseline" | "flex-end"
  width?: string
  height?: string
}
export const FlexWrap = styled.div<FlexWrapType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap || ""};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`
