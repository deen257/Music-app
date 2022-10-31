import React from 'react'
import { SongCard, PlayPause } from '../components/index'
import { Link } from 'react-router-dom'

const TopPlay = ({ data, activeSong, isPlaying }) => {
  return (
    <section className=' lg:ml-[24px]'>
      <div className='flex justify-between my-[16px] lg:my-0'>
        <h1 className='font-bold text-[24px] leading-[29px] '>Top charts</h1>
        <Link to='/top-charts'>
          <h4 className='text-dimWhite opacity-50 underline'>See more</h4>
        </Link>
      </div>
      <div className='flex flex-row scroll hide-scrollbar lg:block  '>
        {data.slice(0, 3)?.map((song, index) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              index={index}
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TopPlay
