import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  TopPlay,
  RelatedSongs,
  NewReleases,
  Error,
  Loading,
} from '../components'

import {
  useGetTopChartsQuery,
  useGetNewTracksQuery,
} from '../redux/services/shazamCore'

const Homee = () => {
  // const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetTopChartsQuery()
  
  if (isFetching) return <Loading title='loading songs...' />
  if (error) return <Error />


  return (
    <>
      <div className='lg:flex'>
        <RelatedSongs />
        <TopPlay data={data} activeSong={activeSong} isPlaying={isPlaying} />
      </div>
      <div>
        <NewReleases activeSong={activeSong} isPlaying={isPlaying} />
      </div>
    </>
  )
}

export default Homee
