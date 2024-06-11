import React from 'react'

const Header = ({ children, background, fixed, padding }) => {
  return (
    <div style={{ position: fixed ? 'fixed' : '-moz-initial', top: '0', left: '0', width: '100%', padding: padding, background: background }}>
        {children}
    </div>
  )
}

export default Header