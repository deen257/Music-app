import React from 'react'

const Home = ({ className, color }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='20'
      fill='none'
      viewBox='0 0 18 20'
    >
      <path
        fill={color}
        d='M6.382 18.05V15.24a1.3 1.3 0 011.297-1.296h2.634a1.3 1.3 0 011.305 1.296v2.803c0 .618.502 1.12 1.125 1.125h1.797a3.172 3.172 0 002.24-.916 3.126 3.126 0 00.928-2.222V8.044c0-.674-.3-1.312-.82-1.744L10.78 1.45a2.856 2.856 0 00-3.628.066L1.178 6.3c-.545.42-.87 1.06-.886 1.744v7.977c0 1.737 1.418 3.146 3.168 3.146h1.756c.3.002.588-.115.8-.324.213-.21.333-.495.333-.793h.033z'
      ></path>
    </svg>
  )
}

export default Home
