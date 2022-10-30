import React from 'react'

function Play({ className, onClick, color }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='13'
      fill='none'
      viewBox='0 0 12 13'
    >
      <path
        fill={color}
        d='M.009 6.5V4.019c0-3.184 2.253-4.487 5.003-2.895l2.15 1.24 2.15 1.241c2.75 1.592 2.75 4.198 0 5.79l-2.15 1.24-2.15 1.24C2.262 13.469.01 12.166.01 8.982V6.5z'
      ></path>
    </svg>
  )
}

export default Play
