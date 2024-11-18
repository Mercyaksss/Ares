import React from 'react'
import './navtoggle.css'
import { NavLink } from 'react-router-dom'

function Navtoggle() {
  return (
    <div className="overlay">
        <div className='toggle'>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <p>HOME</p>
            </NavLink>
            <NavLink to="/myDashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <p>MY DASHBOARD</p>
            </NavLink>
        </div>    
    </div>
  )
}

export default Navtoggle
