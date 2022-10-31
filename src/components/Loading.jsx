import React from 'react'
import loader from '../assets/loader.svg'

const Loading = ({ title }) => {
  return (
    <>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='font-bold text-[24px] leading-[28.8px] text-center '>
          {title || 'loading...'}
        </div>
        <img src={loader} alt='loading' />
      </div>
    </>
  )
}

export default Loading
