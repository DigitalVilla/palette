import React, { memo } from "react"
import ColorBox from "./ColorBox"
import "./PaletteColors.scss"

const PaletteColors = memo(function ({ columns, colors, display, onClick }) {
  return (
    <ul
      className={`palette sp-grid no-gutter
      display-${display || "name"}
      cell-${columns || "auto"} `}
    >
      <ColorBoxes colors={colors} onClick={onClick} />
    </ul>
  )
})

const ColorBoxes = memo(function ColorBoxes({ colors, onClick }) {
  return (
    <>
      {colors.length &&
        colors.map(({ name, color }, i) => {
          return (
            <ColorBox
              key={`${i}-${color}`}
              code={color.toUpperCase()}
              name={name}
              onClick={onClick}
            />
          )
        })}
    </>
  )
})

export default PaletteColors
