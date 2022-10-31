import React, { useState, useEffect } from 'react'
import new9 from '../assets/new9.png'
import new10 from '../assets/new10.png'
import new11 from '../assets/new11.png'

import { PlaylistCard } from '../components'

const Playlist = () => {
  const [active, setActive] = useState('')
  const handleClick = (name) => {
    setActive(name)
  }

  useEffect(() => {
    setActive('collection')
  }, [])

  return (
    <>
      <div className=' flex items-center  font-normal leading-[17px] text-[14px] mt-[15px]'>
        <button
          onClick={() => {
            handleClick('collection')
          }}
          className={` border  rounded-[27px] mr-[10px] flex justify-center  border-dimwhite w-[120px] h-[40px]  p-2.5 ${
            active === 'collection'
              ? ' opacity-[1] bg-secondary  text-primary border-none '
              : 'opacity-20'
          }`}
        >
          My collection
        </button>
        <button
          onClick={() => {
            handleClick('likes')
          }}
          className={` border  rounded-[27px] flex justify-center  border-dimwhite w-[120px] h-[40px]  p-2.5 ${
            active === 'likes'
              ? 'bg-secondary opacity-[1] text-primary border-none '
              : 'opacity-20'
          }`}
        >
          likes
        </button>
      </div>

      {active === 'collection' ? (
        <div className='flex flex-col sm:flex-row mt-[38px] sm:flex-wrap '>
          <PlaylistCard new9={new9} />
          <PlaylistCard new9={new10} />
          <PlaylistCard new9={new11} />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Playlist
