import React, { memo } from "react"
import ColorBox from "./ColorBox"

export default memo(function PaletteColors({ colors }) {
  console.log("PaletteColors => M")

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
