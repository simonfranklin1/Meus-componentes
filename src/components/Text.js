import React from 'react'

const Text = ({ text, color }) => {
  return (
    <div style={{ color: color }}>
        {text}
    </div>
  )
}

export default Text