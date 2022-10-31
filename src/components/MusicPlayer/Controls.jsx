import React from 'react'
import { BsFillPauseFill } from 'react-icons/bs'
import { Prev, Next, Shuffle, Repeat, Play } from '../../assets'

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className='flex items-center justify-around md:w-40 lg:w-56 2xl:w-80'>
    {
      <Repeat
        color={repeat ? '#FACD66' : '#fff'}
        onClick={() => {
          setRepeat((prev) => !prev)
        }}
        className='hidden sm:block cursor-pointer'
      />
    }
    {currentSongs?.length && (
      <div className='sm:mx-[12px]'>
        <Prev
          color='#FFF'
          className='cursor-pointer hidden sm:block'
          onClick={handlePrevSong}
        />
      </div>
    )}
    {isPlaying ? (
      <div className='w-[34px] h-[34px] sm:w-[25px] sm:h-[25px] flex justify-center items-center bg-secondary rounded-full'>
        <BsFillPauseFill
          size={25}
          color='#FFF'
          onClick={handlePlayPause}
          className='cursor-pointer'
        />
      </div>
    ) : (
      <div className='w-[34px] h-[34px] sm:w-[25px] sm:h-[25px] flex justify-center items-center bg-secondary rounded-full'>
        <Play
          color='#FFF'
          onClick={handlePlayPause}
          className='cursor-pointer  ml-[2px]'
        />
      </div>
    )}
    {currentSongs?.length && (
      <div className='mx-[26px]  sm:mx-[12px]'>
        <Next
          color='#FFF'
          className='cursor-pointer '
          onClick={handleNextSong}
        />
      </div>
    )}
    <Shuffle
      color={shuffle ? '#FACD66' : 'white'}
      onClick={() => setShuffle((prev) => !prev)}
      className='hidden sm:block cursor-pointer'
    />
  </div>
)

export default Controls
