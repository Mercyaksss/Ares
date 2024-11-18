import React from 'react'
import './progressbar.css'

function Progressbar() {
  return (
    <div className='xyz'>
      <p>80%</p>
      <div className='progressbar-container'>
        <div className='progressbar'></div>
        <div className='fill'></div>      
      </div>
    </div>

   

  )
}

export default Progressbar
