import React from 'react'
import { RelatedSongs, TopPlay, NewReleases } from '../components/index'

const Hero = () => {
  return (
    <section className='mr-[20px] lg:mr-[100px]'>
      <div className=' lg:flex '>
        <RelatedSongs />
        <TopPlay />
      </div>
      <div>
        <NewReleases />
      </div>
      <div className='h-[100px]'></div>
    </section>
  )
}

export default Hero
