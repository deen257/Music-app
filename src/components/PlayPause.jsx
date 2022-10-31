import React from 'react'
import { FaPauseCircle } from 'react-icons/fa'
import { Play } from '../assets'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song?.title ? (
    <div className='w-[35px] h-[35px] bg-secondary rounded-[99px] flex justify-center items-center'>
      <FaPauseCircle
        className='text-gray-300 h-fit w-fit'
        onClick={handlePause}
      />
    </div>
  ) : (
    <div className='w-[35px] h-[35px] bg-secondary rounded-[99px] flex justify-center items-center'>
      <Play className='w-fit h-fit  ' color='white' onClick={handlePlay} />
    </div>
  )

export default PlayPause
