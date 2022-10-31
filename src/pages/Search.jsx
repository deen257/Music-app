import React from 'react'
import { useParams } from 'react-router-dom'
import { AlbumCard, Loading, Error } from '../components'
import { useSelector } from 'react-redux'
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore'

const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)

  const songs = data?.tracks?.hits?.map((song) => song.track)

  if (isFetching) return <Loading title='searching' />
  if (error) return <Error />

  return (
    <>
      <h1 className='tex-dimwhite font-bold leading-[42px] text-[35px] '>
        showing results for
        <span className='text-secondary capitalize'> {searchTerm}.</span>
      </h1>
      <div className='flex flex-wrap'>
        {songs.map((song, index) => {
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

export default Search
