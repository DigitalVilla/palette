import React, { useState } from "react"
import PaletteColors from "../../components/PaletteColors"
import SelectColumns from "../../components/SelectColumns"
import ToggleButton from "../../components/ToggleButton"

function Palette({ palette }) {
  const copyToClipboard = () => {}

  const [displayName, setDisplayName] = useState(true)
  const [columns, setColumns] = useState(0)

  return (
    <>
      <header className="container">
        <ToggleButton
          displayName={displayName}
          setDisplayName={setDisplayName}
        />
        <SelectColumns setColumns={setColumns} columns={columns} />
      </header>

      <main className="palette-colors">
        <PaletteColors
          columns={columns}
          onClick={copyToClipboard}
          colors={palette.colors}
          display={displayName ? "name" : "code"}
        />
      </main>
      <footer>digital villa</footer>
    </>
  )
}

export default Palette
