import React from 'react'
import { SongBar, Loading, Error } from '../components/index'
import { useGetNewTracksQuery } from '../redux/services/shazamCore'
import { Link } from 'react-router-dom'

const NewReleases = ({activeSong, isPlaying}) => {
  const { data, isFetching, error } = useGetNewTracksQuery()
  if (isFetching) {
    return <Loading title='loading music ...' />
  }
  if (error) {
    return <Error />
  }

  return (
    <>
      <div className='mt-[34px] flex justify-between items-center'>
        <h1 className='  text-dimWhite font-bold text-[24px] leading-[28.8px]'>
          New releases.
        </h1>
        <Link to='/around-you'>
          <h4 className=' opacity-50 underline'> see more</h4>
        </Link>
      </div>

      <section className='scroll h-full hide-scrollbar w-full '>
        <div className=''>
          <SongBar data={data} activeSong={activeSong} isPlaying={isPlaying} />
        </div>
      </section>
    </>
  )
}

export default NewReleases
