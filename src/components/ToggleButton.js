import React from "react"

function ToggleButton({ setViewName, viewName }) {
  console.log("ToggleButton =>")
  const toggleName = () => {
    setViewName(!viewName)
  }

  return (
    <button type="button" onClick={toggleName}>
      Display: {viewName ? "Name" : "Code"}
    </button>
  )
}

export default ToggleButton
