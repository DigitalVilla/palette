import React from "react"
import PropTypes from "prop-types"
import getClassName from "./getClassName.js"

import "./Grid.scss"

Grid.propTypes = {
  className: PropTypes.string,
  noGutter: PropTypes.bool,
  animate: PropTypes.bool,
  grow: PropTypes.bool,
  auto: PropTypes.bool,
  gutter: PropTypes.number,
  cells: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
}

function Grid(props) {
  const children = false
    ? React.Children.map(props.children, (child) => {
        return <li className="sp-cell">{child}</li>
      })
    : props.children

  return (
    <div className={`sp-grid ${props.className} ${getClassName(props)}`}>
      {children && children}
    </div>
  )
}

export default Grid
