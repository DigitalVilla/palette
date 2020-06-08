import React, { useState } from "react"
import PaletteColors from "./PaletteColors"
import ColumnSelect from "./ColumnSelect"
import ToggleButton from "./ToggleButton"

function Palette({ palette }) {
  console.log("Palette =>")

  const [cols, setCols] = useState(0)
  const [viewName, setViewName] = useState(true)

  return (
    <>
      <header className="container">
        <ToggleButton viewName={viewName} setViewName={setViewName} />
        <ColumnSelect setColumns={setCols} columns={cols} />
      </header>

      <main className="palette-colors container">
        <div className={`grid col-${cols} view-${viewName ? "name" : "code"}`}>
          <PaletteColors colors={palette.colors} />
        </div>
      </main>
      <footer>digital villa</footer>
    </>
  )
}

export default Palette
