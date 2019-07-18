import React from 'react'

export default function Text(props) {
  const { title = false, bold = false, children } = props
  return <div>{children}</div>
}
