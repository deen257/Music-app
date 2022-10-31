import React from 'react'

function Likes({color, onClick}) {
  return (
    <svg
    onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='37'
      height='37'
      fill='none'
      viewBox='0 0 37 37'
    >
      <circle
        cx='18.5'
        cy='18.5'
        r='18'
        stroke='#fff'
        strokeOpacity='0.11'
      ></circle>
      <path
        stroke='#FACD66'
        fill={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='0.563'
        d='M12.154 19.699c-.805-2.513.136-5.385 2.773-6.234a4.505 4.505 0 014.073.684c1.091-.844 2.679-1.129 4.065-.684 2.638.85 3.584 3.721 2.78 6.234C24.593 23.68 19 26.749 19 26.749s-5.552-3.021-6.846-7.05z'
        clipRule='evenodd'
      ></path>
      <path
        stroke='#FACD66'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='0.563'
        d='M22 16.025c.802.26 1.37.976 1.438 1.817'
        opacity='0.4'
      ></path>
    </svg>
  )
}

export default Likes
