import React from "react"
import PropTypes from "prop-types"
import getClassName from "./getClassName.js"

Cell.propTypes = {
  className: PropTypes.string,
  noGutter: PropTypes.bool,
  noBleed: PropTypes.bool,
  noGaps: PropTypes.bool,
  animate: PropTypes.bool,
  growCell: PropTypes.bool,
  auto: PropTypes.bool,
  gutter: PropTypes.number,
  bleed: PropTypes.number,
  cells: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  md2: PropTypes.number,
  lg: PropTypes.number,
  lg2: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
}

function Cell(props) {
  return (
    <div className={`sp-cell ${getClassName(props)}`}>
      <div className={props.className}>{props.children}</div>
    </div>
  )
}

export default Cell
