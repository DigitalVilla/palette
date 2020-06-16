import React, { memo, useEffect, useRef } from "react"
import useMedia from "../../hooks/useMedia"
import "./SelectColumns.scss"

export default memo(function SelectColumns({ setColumns, columns }) {
  // console.log("ColumnSelect => M")
  const store = useRef(0)
  const maxColumns = useMedia(
    [{ "1600": 6 }, { "1400": 5 }, { "1024": 4 }, { "768": 3 }, { "568": 2 }],
    0,
  )

  useEffect(() => {
    const value = store.current
    if (columns > maxColumns) {
      console.log("Palette -> maxOptions")
      return setColumns(0)
    }

    if (value > 0 && value !== columns && value <= maxColumns) {
      console.log("Palette -> value")
      return setColumns(value)
    }
    // eslint-disable-next-line
  }, [maxColumns])

  const handleChange = ({ target: { value } }) => {
    store.current = value
    setColumns(value)
  }

  return (
    <div className="column-select">
      <label htmlFor="column-select">Columns {maxColumns}</label>
      <select
        value={columns}
        name="column"
        id="column-select"
        onChange={handleChange}
      >
        <option value="0">Auto</option>
        {Array.from({ length: maxColumns }).map((el, i) => (
          <option key={`option-${i}`} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  )
})
