import React from 'react'
import { AlbumCard, Loading, Error } from '../components'
import { useSelector } from 'react-redux'
import { useGetNewTracksQuery } from '../redux/services/shazamCore'

const AroundYou = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetNewTracksQuery()

  if (isFetching) return <Loading title='loading songs...' />
  if (error) return <Error />

  return (
    <>
      <h1 className='tex-dimwhite font-bold leading-[42px] text-[35px] '>
        New Releases
      </h1>
      <div className='flex flex-wrap'>
        {data.map((song, index) => {
          return (
            <AlbumCard
              key={song.key}
              data={data}
              song={song}
              index={index}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          )
        })}
      </div>
    </>
  )
}

export default AroundYou
