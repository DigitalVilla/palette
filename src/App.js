import React from "react"
import Palette from "./components/Palette"
import seedColors from "./seedColors"
import "./styles/main.scss"

function App() {
  return (
    <div>
      <Palette palette={seedColors[3]} />
    </div>
  )
}

export default App
