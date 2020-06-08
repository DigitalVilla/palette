import React, { useState, memo } from "react"

export default memo(function ColorBox({ color, name }) {
  console.log("ColorBox => ")
  const [colorName, setColorName] = useState(name)

  const handleHold = (e) => {
    if (e.type === "mousedown") {
      setColorName(color)
    } else if (colorName !== name) {
      setColorName(name)
    }
  }

  return (
    <div className={`grid-item no-gutter`}>
      <div className="color-box" style={{ background: color }}>
        <button type="button" className="copy-btn" aria-label="copy color">
          <span>Copied</span>
        </button>

        <div className="controls">
          <button
            className="color-title"
            type="button"
            onMouseDown={handleHold}
            onMouseUp={handleHold}
            onMouseLeave={handleHold}
            aria-label={name}
          >
            <span aria-hidden="true" className="name">
              {colorName}
            </span>
            <span aria-hidden="true" className="code">
              {colorName === name ? color : name}
            </span>
          </button>
          <button className="more-btn" type="button">
            More
          </button>
        </div>
      </div>
    </div>
  )
})

// export default ColorBox
