import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import search from '../assets/search.svg'

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [mobileSearch, settMobileSearch] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search/${searchTerm}`)
  }

  return (
    <div className='  flex justify-end h-[34px] lg:jutify-center items-center w-11/12 mr-[62px] lg:max-h-[73px] text-big'>
      <div
        onClick={() => settMobileSearch(false)}
        className={
          mobileSearch
            ? ' lg:hidden ml-[29px] self-center w-[30px] h-[30px] lg:w-auto lg:h-auto hover:cursor-pointer'
            : 'hidden'
        }
      >
        <img src={search} alt='' className='w-full' />
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        className={
          mobileSearch
            ? 'hidden lg:block w-full pt-[29px] pb-[26px]'
            : 'lg:block w-full pt-[29px] pb-[26px]'
        }
      >
        <input
          name='search-field'
          type='text'
          id='search-field'
          autoComplete='off'
          placeholder='Search artists'
          className=' pl-[26px] bg-primary w-full mr-[62px] opacity-25 focus:outline-none  '
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Searchbar
