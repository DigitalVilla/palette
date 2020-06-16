import React, { memo } from "react"
import ColorBox from "./ColorBox"
import "./PaletteColors.scss"

export default memo(function PaletteColors({ columns, colors, display }) {
  console.log("PaletteColors => M", display)

  return (
    <ul
      className={`palette no-gutter
      display-${display || "name"}
      cell-${columns || "auto"} `}
    >
      <ColorBoxes colors={colors} />
    </ul>
  )
})

const ColorBoxes = memo(function ColorBoxes({ colors }) {
  return (
    <>
      {colors.length &&
        colors.map(({ name, color }, i) => {
          return (
            <ColorBox
              key={`${i}-${color}`}
              color={color.toUpperCase()}
              name={name}
            />
          )
        })}
    </>
  )
})
