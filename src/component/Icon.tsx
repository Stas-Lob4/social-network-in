import React, { FC } from "react"
import { IdIconSpriteType } from "../assets/img/IconsSpriteType"
import iconSprite from "../assets/svg/icons-sprite.svg"

type IconPropsType = {
  iconId: IdIconSpriteType | string
  width?: number
  height?: number | string
  viewBox?: string
}

export const Icon: FC<IconPropsType> = ({ iconId, viewBox, height, width }) => {
  return (
    <svg
      width={width || "48"}
      height={height || "48"}
      viewBox={viewBox || `0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}
