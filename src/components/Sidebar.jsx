import React, { useState, useEffect } from 'react'
import playlist from '../assets/playlist.jsx'
import {
  Home,
  Logo,
  Radio,
  Video,
  Playlist,
  Profile,
  Logout,
} from '../assets/index'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('')

  useEffect(()=>{setActive('home')},[])

  const handleClick = (name) => {
    setMenu(false)
    setActive(name)
  }

  return (
    <div className='flex flex-col capitalize'>
      <div
        className={
          menu
            ? 'hidden'
            : 'bg-primary flex flex-row  mt-[23px] mx-[27px] lg:mb-[39px] lg:ml-[40px]'
        }
      >
        <div
          onClick={() => {
            setMenu(!menu)
          }}
          className='  flex flex-col lg:hidden  self-center items-center  w-[24px] h-[24px] mr-[10px] hover:cursor-pointer'
        >
          <span className='w-[16px] h-[2px] bg-brightWhite mt-[5px] mb-[5px] rounded'></span>
          <span className='w-[16px] h-[2px] bg-brightWhite  rounded'></span>
        </div>
        <button className='ml-[2px] rounded-full  '>
          <Logo className='w-[34px] h-[34px]' />
        </button>
      </div>
      <div className='hidden lg:block'>
        <div className='flex flex-col items-center bg-smhandle ml-[20px] mb-[20px] px-[17px] rounded-full'>
          <button
            className='mt-[27px]'
            onClick={() => {
              handleClick('home')
            }}
          >
            <Link to='/'>
              <Home
                className='w-full svg'
                color={
                  active == 'home'
                    ? 'rgba(250, 205, 102, 1)'
                    : 'rgba(239, 238, 224, 0.25)'
                }
              />
            </Link>
          </button>
          <button
            className='mt-[27px]'
            onClick={() => {
              handleClick('playlist')
            }}
          >
            <Link to='/playlits'>
              <Playlist
                className='w-full svg  '
                color={
                  active === 'playlist'
                    ? 'rgba(250, 205, 102, 1)'
                    : 'rgba(239, 238, 224, 0.25)'
                }
              />
            </Link>
          </button>
          <button
            className='mt-[27px]'
            onClick={() => {
              handleClick('radio')
            }}
          >
            <Link to='/radio'>
              <Radio
                className='w-full svg'
                color={
                  active === 'radio'
                    ? 'rgba(250, 205, 102, 1)'
                    : 'rgba(239, 238, 224, 0.25)'
                }
              />
            </Link>
          </button>
          <button
            className='my-[27px] '
            onClick={() => {
              handleClick('video')
            }}
          >
            <Link to='/music-video'>
              <Video
                className='w-full svg'
                color={
                  active === 'video'
                    ? 'rgba(250, 205, 102, 1)'
                    : 'rgba(239, 238, 224, 0.25)'
                }
              />
            </Link>
          </button>
        </div>
        <div className='flex flex-col items-center rounded-full bg-smhandle ml-[20px] pt-[25px] pb-[29px] px-[15px]'>
          <button
            onClick={() => {
              handleClick('profile')
            }}
          >
            <Link to='/profile'>
              <Profile
                className='w-full mb-[33px] svg'
                color={
                  active === 'profile'
                    ? 'rgba(250, 205, 102, 1)'
                    : 'rgba(239, 238, 224, 0.25)'
                }
              />
            </Link>
          </button>
          <button
            onClick={() => {
              handleClick('logout')
            }}
          >
            <Logout
              className='w-full'
              color={
                active ? 'rgba(250, 205, 102, 1)' : 'rgba(239, 238, 224, 0.25)'
              }
            />
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={
          menu
            ? ' lg:hidden w-screen h-screen bg-smhandle  pt-5  pl-[40px]  leading-[20px] text-[17px] font-bold z-10 '
            : 'hidden'
        }
      >
        <Link to='/'>
          <div
            onClick={() => {
              handleClick('home')
            }}
            className='flex mb-[50px] pt-[50px] hover:opacity-100'
          >
            <Home
              className='w-fit svg'
              color={
                active === 'home'
                  ? 'rgba(250, 205, 102, 1)'
                  : 'rgba(239, 238, 224, 0.25)'
              }
            />
            <h4
              className={`ml-[30px] hover:opacity-100  opacity-[0.25] ${
                active === 'home' ? 'opacity-100 ' : ' '
              }`}
            >
              Home
            </h4>
          </div>
        </Link>
        <Link to='/playlits'>
          <div
            onClick={() => {
              handleClick('playlist')
            }}
            className='flex mb-[50px] svg'
          >
            <Playlist
              className='w-fit svg'
              color={
                active === 'playlist'
                  ? 'rgba(250, 205, 102, 1)'
                  : 'rgba(239, 238, 224, 0.25)'
              }
            />
            <h4
              className={`ml-[30px] hover:opacity-100  opacity-[0.25] ${
                active === 'playlist' ? 'opacity-100 ' : ' '
              }`}
            >
              My collection
            </h4>
          </div>
        </Link>
        <Link to='/radio'>
          <div
            onClick={() => {
              handleClick('radio')
            }}
            className='flex mb-[50px] svg '
          >
            <Radio
              className='w-fit svg'
              color={
                active === 'radio'
                  ? 'rgba(250, 205, 102, 1)'
                  : 'rgba(239, 238, 224, 0.25)'
              }
            />
            <h4
              className={`ml-[30px] hover:opacity-100  opacity-[0.25] ${
                active === 'radio' ? 'opacity-100 ' : ' '
              }`}
            >
              Radio
            </h4>
          </div>
        </Link>
        <Link to='/music-video'>
          <div
            onClick={() => {
              handleClick('video')
            }}
            className='flex mb-[50px] svg '
          >
            <Video
              className='w-fit svg'
              color={
                active === 'video'
                  ? 'rgba(250, 205, 102, 1)'
                  : 'rgba(239, 238, 224, 0.25)'
              }
            />
            <h4
              className={`ml-[30px] hover:opacity-100  opacity-[0.25] ${
                active === 'video' ? 'opacity-100 ' : ' '
              }`}
            >
              Music vidoes
            </h4>
          </div>
        </Link>
        <Link to='/profile'>
          <div
            onClick={() => {
              handleClick('profile')
            }}
            className='flex mb-[50px] svg'
          >
            <Profile
              className='w-fit svg'
              color={
                active === 'active'
                  ? 'rgba(250, 205, 102, 1)'
                  : 'rgba(239, 238, 224, 0.25)'
              }
            />
            <h4
              className={`ml-[30px] hover:opacity-100  opacity-[0.25] ${
                active === 'profile' ? 'opacity-100 ' : ' '
              }`}
            >
              Profile
            </h4>
          </div>
        </Link>
        <Link to='/log-out'>
          <div
            onClick={() => {
              handleClick('logout')
            }}
            href='#'
            className='flex mb-[50px] svg'
          >
            <Logout
              className='w-fit svg'
              color={
                active  ? 'rgba(250, 205, 102, 1)' : 'rgba(239, 238, 224, 0.25)'
              }
            />
            <h4
              className={`ml-[30px] hover:opacity-100  opacity-[0.25] ${
                active === 'logout' ? 'opacity-100 ' : ' '
              }`}
            >
              Log out
            </h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
