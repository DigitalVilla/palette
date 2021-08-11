export default function getClassName(params) {
  let className = ""

  if (params.animate) {
    className += " animate"
  }
  if (params.grow) {
    className += " grow"
  }
  if (params.auto) {
    className += " auto"
  }

  if (params.noGaps) {
    className += ` no-gaps`
  } else {
    if (params.noBleed) {
      className += " no-bleed"
    } else if (params.bleed >= 0) {
      className += ` bleed-${parseInt(params.bleed)}`
    }

    if (params.noGutter) {
      className += " no-gutter"
    } else if (params.gutter >= 0) {
      className += ` gutter-${parseInt(params.gutter)}`
    }
  }

  if (params.xxl) {
    className += ` cell-xxl-${parseInt(params.xxl)}`
  }
  if (params.xl) {
    className += ` cell-xl-${parseInt(params.xl)}`
  }
  if (params.lg2) {
    className += ` cell-lg2-${parseInt(params.lg2)}`
  }
  if (params.lg) {
    className += ` cell-lg-${parseInt(params.lg)}`
  }
  if (params.m2) {
    className += ` cell-md3-${parseInt(params.m2)}`
  }
  if (params.md) {
    className += ` cell-md-${parseInt(params.md)}`
  }
  if (params.sm) {
    className += ` cell-sm-${parseInt(params.sm)}`
  }
  if (params.xs) {
    className += ` cell-xs-${parseInt(params.xs)}`
  }
  if (params.cells) {
    className += ` cell-${parseInt(params.cells)}`
  }
  className && console.log(className)

  return className
}
