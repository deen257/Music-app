import React from 'react'
import like from '../assets/like.svg'
import PlayPause from './PlayPause'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import { SongDetails } from '../pages'

const SongCard = ({ song, isPlaying, activeSong, data, index }) => {
  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }))
    dispatch(playPause(true))
  }

  return (
    <article className='bg-smhandle min-w-[315px] mr-[20px] lg:w-full flex flex-col flex-wrap content-between  h-[252px] lg:h-auto lg:grid lg:grid-cols-card pl-[17px] p-[23px]  pt-[17px] mb-[12px] rounded-[20px] text-brightWhite animate-slideup '>
      <div className='relative w-[108px]  h-[109px] lg:mr-[10px] lg:w-[63px] lg:h-[64px] group'>
        <div
          className={`absolute justify-center items-center  inset-0 top-0    group-hover:flex ${
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
          className='w-full rounded-[10px]'
        />
      </div>
      <div className=' mt-[10px] lg:mt-0 lg:ml-[14px] w-[250px] lg:w-auto truncate'>
        <Link to={`/songs/${song?.key}-${index}`}>
          <h1 className='font-normal text-[17px] leading-[20px] '>
            {song.title}
          </h1>
        </Link>
        <Link
          to={
            song.artists
              ? `/artists/${song?.artists[0]?.adamid}`
              : '/top-artists'
          }
        >
          <h4 className='opacity-50 '>{song.subtitle}</h4>
        </Link>
        <p className='mt-[24px] lg:mt-0'>1:20:3</p>
      </div>
      <div className='lg:self-center'>
        <img src={like} alt='like' />
      </div>
    </article>
  )
}

export default SongCard
