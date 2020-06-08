import React, { memo, useEffect, useRef } from "react"
import useMedia from "../hooks/useMedia"

export default memo(function ColumnSelect({ setColumns, columns }) {
  console.log("ColumnSelect => M")
  const store = useRef(0)
  const maxOptions = useMedia(
    [{ "1600": 6 }, { "1400": 5 }, { "1024": 4 }, { "768": 3 }, { "568": 2 }],
    0,
  )

  useEffect(() => {
    const value = store.current
    if (columns > maxOptions) {
      console.log("Palette -> maxOptions")
      return setColumns(0)
    }

    if (value > 0 && value !== columns && value <= maxOptions) {
      console.log("Palette -> value")
      return setColumns(value)
    }
    // eslint-disable-next-line
  }, [maxOptions])

  const handleChange = ({ target: { value } }) => {
    store.current = value
    setColumns(value)
  }

  return (
    <div className="column-select">
      <label htmlFor="column-select">Columns {maxOptions}</label>
      <select
        value={columns}
        name="column"
        id="column-select"
        onChange={handleChange}
      >
        <option value="0">Auto</option>
        {Array.from({ length: maxOptions }).map((el, i) => (
          <option key={`option-${i}`} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  )
})
