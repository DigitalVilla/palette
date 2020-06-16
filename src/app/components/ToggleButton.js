import React from "react"

function ToggleButton({ setDisplayName, displayName }) {
  console.log("ToggleButton =>")
  const toggleName = () => {
    setDisplayName(!displayName)
  }

  return (
    <button type="button" onClick={toggleName}>
      Display: {displayName ? "Name" : "Code"}
    </button>
  )
}

export default ToggleButton
