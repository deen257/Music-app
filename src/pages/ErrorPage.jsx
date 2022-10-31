import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className=' font-bold capitalize text-[30px]'>Error Page</div>
      <Link to='/'>
        <button className=' bg-secondary  text-primary border-none  rounded-[27px] mr-[10px] flex items-center justify-center border-dimwhite w-[120px] h-[40px]  p-2.5'>
          Home
        </button>
      </Link>
    </section>
  )
}

export default ErrorPage
