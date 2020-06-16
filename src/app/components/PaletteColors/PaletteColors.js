import React, { memo } from "react"
import ColorBox from "./ColorBox"
import "./PaletteColors.scss"

const PaletteColors = function ({ columns, colors, display }) {
  return (
    <ul
      className={`palette sp-grid no-gutter
      display-${display || "name"}
      cell-${columns || "auto"} `}
    >
      <ColorBoxes colors={colors} />
    </ul>
  )
}

const ColorBoxes = memo(function ColorBoxes({ colors }) {
  return (
    <>
      {colors.length &&
        colors.map(({ name, color }, i) => {
          return (
            <ColorBox
              key={`${i}-${color}`}
              code={color.toUpperCase()}
              name={name}
            />
          )
        })}
    </>
  )
})

export default PaletteColors
