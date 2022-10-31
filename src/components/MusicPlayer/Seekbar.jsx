import React from 'react'

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  
  return (
    <div className='hidden sm:flex flex-row  items-center mt-3'>
      <input
        type='range'
        step='any'
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className=' bg-secondary md:block w-full md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg'
      />
    </div>
  )
}

export default Seekbar
