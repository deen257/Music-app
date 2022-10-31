import React from 'react'

function Next({ className, onClick }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='23'
      fill='none'
      viewBox='0 0 23 23'
    >
      <path
        fill='#fff'
        d='M4.16 7.153v8.703c0 1.782 1.938 2.9 3.484 2.01l3.773-2.174 3.774-2.182c1.546-.892 1.546-3.12 0-4.01l-3.774-2.183-3.773-2.173c-1.546-.891-3.483.218-3.483 2.01zM19.147 17.802a.687.687 0 01-.682-.682V5.88c0-.372.309-.682.682-.682.372 0 .682.31.682.682v11.24c0 .372-.3.682-.682.682z'
      ></path>
    </svg>
  )
}

export default Next
