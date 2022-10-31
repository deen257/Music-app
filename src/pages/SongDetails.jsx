import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Like, Play, Add } from '../assets'
import { Loading, PlayPause } from '../components'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import {
  useGetSongDetailsQuery,
  useGetTopChartsQuery,
} from '../redux/services/shazamCore'

const SongDetails = () => {
  const [liked, setLiked] = useState(false)
  const { songid, index } = useParams()
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data: songData, isFetching: isFetchingDetails } =
    useGetSongDetailsQuery({ songid })
  const { data } = useGetTopChartsQuery()
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }))
    dispatch(playPause(true))
  }
  const handleLikeClick = () => {
    setLiked(!liked)
  }

  if (isFetchingDetails) return <Loading />

  return (
    <section className=''>
      <div className='flex flex-col md:flex-row md:mb-10'>
        <div className=' min-w-[284px] max-w-[380px] min-h-[288px] '>
          <img
            src={songData?.images?.coverart}
            alt='song_cover'
            className='w-full h-full rounded-[25px]'
          />
        </div>
        <div className='flex flex-col md:self-end md:ml-8  mt-6'>
          <h1 className='text-sgHeader font-bold mb-2.5 leading-[42px] text-[35px] '>
            {songData.title}
          </h1>
          <h4 className='text-dimWhiite font-normal text-[14px] leading-[16px] '>
            {songData?.genres?.primary}
          </h4>
          <h4 className='text-dimWhiite font-normal my-2.5 text-[14px] leading-[16px]'>
            {songData?.releasedate}
          </h4>
          <div className='flex items-center my-6 md:my-0 md:mt-8 '>
            <button
              onClick={() => {
                handlePlayClick(songData, index)
              }}
              className='song-btn p-[10px] flex justify-center items-center mr-2.5'
            >
              <div className='w-[14px] h-[14px] mr-[10px] bg-secondary rounded-full flex justify-center items-center '>
                <Play color='#1D2123' className='w-[7px] h-[7px] ' />
              </div>
              Play all
            </button>
            <button className='song-btn p-[10px] flex justify-center  items-center mr-2.5'>
              <Add className='mr-[10px]' /> Add to collection
            </button>
            <button className='song-btn p-[10px] flex justify-center items-center'>
              <Like onClick={handleLikeClick} color={liked ? `#FACD66` : ''} />
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center song-tab w-full  p-3 '>
        <div className='flex flex-row justify-between items-center'>
          <div className='relative w-[39px] h-[39px]'>
            <div
              className={`absolute justify-center items-center  inset-0     group-hover:flex ${
                activeSong?.title === songData?.title
                  ? 'flex cover-bg'
                  : 'hidden'
              }`}
            >
              <PlayPause
                song={songData}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePause={handlePauseClick}
                handlePlay={() => {
                  handlePlayClick(songData, index)
                }}
              />
            </div>
            <img
              src={songData?.images?.coverart}
              alt='song'
              className='w-full h-full rounded-lg'
            />
          </div>
          <Like
            onClick={handleLikeClick}
            color={liked ? `#FACD66` : ''}
            className=' hidden sm:block sm: ml-3'
          />

          <div className='flex flex-col sm:flex-row sm:items-center ml-[14px] sm:ml-0 '>
            <h4 className='font-normal leading-[14px] text-[12px] mb-1.5 sm:ml-9 sm:mr-[100px] md:mr-[150px] lg:mr-[200px]  '>
              <div className='max-w-[230px] truncate h-full'>
                {songData.title} ~ {songData.subtitle}
              </div>
            </h4>
            <h4 className='font-normal leading-[12px] text-[10px]'> Single</h4>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row  items-end sm:items-center '>
          <div className='flex flex-col mr-1 items-end sm:order-1  sm:ml-[100px] md:ml-[150px] lg:ml-[200px] sm:mr-2  '>
            <div className='rounded-full bg-secondary w-0.5 h-0.5 '></div>
            <div className='rounded-full bg-secondary w-0.5 h-0.5 my-0.5'></div>
            <div className='rounded-full bg-secondary w-0.5 h-0.5 '></div>
          </div>

          <h4 className='mt-1.5 font-normal sm:mt-0 text-[12px] leading-[14px]'>
            4:17
          </h4>
        </div>
      </div>
    </section>
  )
}

export default SongDetails
