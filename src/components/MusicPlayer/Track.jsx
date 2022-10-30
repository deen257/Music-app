import React from 'react'

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className='flex-1 flex items-center justify-start truncate'>
    <div className='sm:block h-16 w-16 mr-4'>
      <img
        src={activeSong?.images?.coverart}
        alt='cover art'
        className='rounded-[16px]'
      />
    </div>
    <div className='w-[50%]'>
      <p className='truncate text-brightWhite leading-[19px] text-[16px] font-bold text-lg'>
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className='truncate text-brightWhite opacity-[44%] text-[11px]'>
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
)

export default Track
