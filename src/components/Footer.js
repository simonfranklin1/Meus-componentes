import React from 'react'

const Footer = ({ children, fixed, background, padding }) => {
  return (
    <div style={{ position: fixed ? 'fixed' : '-moz-initial', bottom: '0', left: '0', width: '100%', padding: padding, background: background }}>
        {children}
    </div>
  )
}

export default Footer