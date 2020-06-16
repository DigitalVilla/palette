import React, { useState, useRef, useEffect } from "react"
import "./ColorBox.scss"

function ColorBox({ code, name }) {
  const [colorName, setColorName] = useState(name)
  const [isCopied, setIsCopied] = useState(false)
  const colorInput = useRef(null)
  const timeId = useRef(0)

  useEffect(() => {
    if (isCopied) {
      console.log("isCopied")

      clearTimeout(timeId.current)
      timeId.current = setTimeout(() => {
        setIsCopied(false)
      }, 600)
    }
    return () => clearTimeout(timeId.current)
  }, [isCopied])

  const copyToClipboard = (e) => {
    colorInput.current.select()
    document.execCommand("copy")
    setIsCopied(true)
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
          onClick={copyToClipboard}
        >
          <span>Copy</span>
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
              {colorName === name ? code : name}
            </span>
          </button>
          <button className="more-btn" type="button">
            More
          </button>
        </div>
        <div
          className={`copy-overlay ${isCopied && "show"}`}
          aria-hidden="true"
        >
          <h2 style={{ background: code }}>Copied!</h2>
        </div>
        <input
          className="hidden"
          aria-hidden="true"
          type="text"
          ref={colorInput}
          value={code}
        />
      </div>
    </li>
  )
}

export default ColorBox
