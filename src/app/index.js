import React from "react"
import Palette from "./pages/Palette/Palette"
import seedColors from "../data/seedColors"
import { Grid, Cell } from "./components/Grid"
import "./styles/main.scss"

function App() {
  return (
    <Grid className={"app"} noGaps cells={1} lg={8}>
      <Cell className="header" lg={7}>
        <header>Header</header>
      </Cell>

      <Cell grow>
        <Grid
          className="grid"
          // animate
          // bleed={0}
          // gutter={0}
          xs={2}
          sm={3}
          md={4}
          md2={5}
          lg={4}
          lg2={5}
          xl={6}
        >
          {Array.from({ length: 30 }).map((el, i) => {
            return (
              <Cell key={"cell-" + i} className="item">
                Cell no {i}
              </Cell>
            )
          })}
        </Grid>
      </Cell>
    </Grid>
  )
}

export default App
