import React from "react"
import Palette from "./pages/Palette/Palette"
import seedColors from "../data/seedColors"
import "./styles/main.scss"

function App() {
  return (
    <div>
      <Palette palette={seedColors[3]} />
    </div>
  )
}

export default App
