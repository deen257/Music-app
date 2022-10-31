import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice'

const AlbumCard = ({ song, data, isPlaying, activeSong, index }) => {
  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }))
    dispatch(playPause(true))
  }

  return (
    <div className='flex flex-col w-[153px] h- capitalize mt-[14px] mr-[30px] text-brightWhite'>
      <div className='relative w-[153px] h-[153px] group '>
        <div
          className={`absolute  justify-center items-center  inset-0 top-0  group-hover:flex ${
            activeSong?.title === song.title ? 'flex cover-bg' : 'hidden'
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          src={song.images?.coverart || song.hub?.image}
          alt='cover'
          className='h-full w-full rounded-[25px]'
        />
      </div>
      <Link to={`/songs/${song?.key}-${index}`}>
        <p className='mt-[5px]'>{song.title}</p>
      </Link>

      <p className='mt-[5px] opacity-50'>{song.subtitle}</p>
    </div>
  )
}

export default AlbumCard
