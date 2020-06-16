import React, { useState, useRef } from "react"
import "./ColorBox.scss"

function ColorBox({ code, name, onClick }) {
  const [colorName, setColorName] = useState(name)
  const colorInput = useRef(null)

  const handleClick = (e) => {
    colorInput.current.select()
    document.execCommand("copy")
    onClick()
  }
  const handleHold = (e) => {
    if (e.type === "mousedown") {
      setColorName(code)
    } else if (colorName !== name) {
      setColorName(name)
    }
  }

  return (
    <li className="sp-cell">
      <div className="color-box" style={{ background: code }}>
        <button
          type="button"
          className="copy-btn"
          aria-label="copy color"
          onClick={handleClick}
        >
          <span>Copy</span>
        </button>
        <input className="hidden" type="text" ref={colorInput} value={code} />
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
              {colorName === name ? code : name}
            </span>
          </button>
          <button className="more-btn" type="button">
            More
          </button>
        </div>
      </div>
    </li>
  )
}

export default ColorBox
