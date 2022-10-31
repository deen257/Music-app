import React from 'react'
import { Play } from '../assets'

const PlaylistCard = ({new9}) => {
  return (
    <div className='relative w-[359px] h-[234px] sm:w-[213px] md:h-[234px]  mb-[20px] sm:mr-[24px]  '>
      <img
        src={new9}
        alt='cover'
        className='w-full h-full absolute rounded-[20px]'
      />
      <div className='relative inset-0 w-full h-full flex justify-between items-end p-5 '>
        <div className='flex flex-col '>
          <h1 className='font-normal text-[24px] text-center leading-[29px]'>
            Limits
          </h1>
          <h4 className='font-normal text-[10px] text-center leading-[12px] mt-[1px] mb-[32px]'>
            John Watts
          </h4>
          <h4 className='font-normal text-[14px] text-center leading-[17px]'>
            2.3m likes
          </h4>
        </div>
        <div className='self-end flex justify-center items-center w-[40px] h-[40px] rounded-full bg-mxsecondary'>
          <Play
            className='opacity-[1] w-[14px] h-[16px] z-20'
            color='#FACD66'
          />
        </div>
      </div>
    </div>
  )
}

export default PlaylistCard