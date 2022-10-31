import React from 'react'
import { AlbumCard } from '../components/index'

const SongBar = ({ data, activeSong, isPlaying }) => {
  return (
    <section className='flex'>
      {data.slice(0, 10).map((song, index) => {
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
    </section>
  )
}

export default SongBar
