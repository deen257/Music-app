import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Searchbar, Sidebar, MusicPlayer } from './components'
import {
  ArtistDetails,
  Playlist,
  AroundYou,
  Search,
  SongDetails,
  TopCharts,
  MusicVideo,
  Radio,
  Profile,
  Homee,
} from './pages'

const App = () => {
  const { activeSong } = useSelector((state) => state.player)
  return (
    <>
      <div className='h-screen  w-screen relative  bg-primary text-dimWhite   '>
        <div className='z-1 lg:absolute left-0 '>
          <Sidebar />
        </div>
        <div className='absolute  left-[100px] lg:left-[100px] top-0 pt-[20px] right-[20px] '>
          <Searchbar />
        </div>
        <div className='z-0 absolute left-[23px] lg:left-[110px]  top-[70px] bottom-[0px] right-[0px] hide-scrollbar overflow-y-scroll overflow-x-scroll h-[calc(100vh-100px)] '>
          <section className=' ml-[10px] mr-[20px] lg:mr-[100px]'>
            <Routes>
              <Route path='/' element={<Homee />} />
              <Route path='/top-charts' element={<TopCharts />} />
              <Route path='/playlits' element={<Playlist />} />
              <Route path='/music-video' element={<MusicVideo />} />
              <Route path='/radio' element={<Radio />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/songs/:songid-:index' element={<SongDetails />} />
              <Route path='/search/:searchTerm' element={<Search />} />
              <Route path='/around-you' element={<AroundYou />} />
            </Routes>
            <div className='h-[100px]'></div>
          </section>
        </div>
        {activeSong?.title && (
          <div className='absolute bottom-0 left-0 right-0  h-[100px] w-full z-20 animate-slideup player '>
            <MusicPlayer />
          </div>
        )}
      </div>
    </>
  )
}

export default App
