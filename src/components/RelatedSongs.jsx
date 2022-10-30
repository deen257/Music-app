import React from 'react'
import { pfp1, pfp2, pfp3, pfp4, pfp5, pfp6 } from '../assets/pfp/index'
import likes from '../assets/likes.svg'

const RelatedSongs = () => {
  return (
    <div className='bg-palete w-full min-w-[300px] max-w-[800px] pl-[45px] h-[373px] palete text-brightWhite rounded-[40px] pt-[38px]'>
      <h4 className=' text-[12px] font-normal leading-[14.4px]  '>
        Currated playlist
      </h4>
      <h1 className='mt-[85px]  font-bold text-[35px] leading-[42px]'>
        R & B Hits
      </h1>
      <p className='mt-[6px] w-[276px] leading-[16.8px] text-[14px]  '>
        All mine, Lie again, Petty call me everyday, Out of time, No love, Bad
        habit, and so much more
      </p>
      <div className='flex mt-[76px]  '>
        <div className='flex items-center w-[64px] relative p-0 m-0 '>
          <div className='w-[20px] h-[20px] absolute   inline-block'>
            <img src={pfp6} alt='people' className='  w-full' />
          </div>
          <div className='w-[20px] absolute  left-[11px]  inline-block'>
            <img src={pfp2} alt='people' className='  w-full' />
          </div>
          <div className='w-[20px] absolute  left-[22px]  inline-block'>
            <img src={pfp6} alt='people' className='  w-full' />
          </div>
          <div className='w-[20px] absolute  left-[33px]  inline-block'>
            <img src={pfp2} alt='people' className='  w-full' />
          </div>
          <div className='w-[20px] absolute  left-[44px]  inline-block'>
            <img src={pfp6} alt='people' className='  w-full' />
          </div>
        </div>
        <img src={likes} alt='like' className='mx-[10px]' />
        <p>33k Likes</p>
      </div>
    </div>
  )
}

export default RelatedSongs
