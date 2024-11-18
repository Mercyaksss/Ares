import React from 'react'
import './button.css'

function Button({text, icon, showPopup, setShowPopup}) {
  const handleClick = () => {
    setShowPopup(true); // Trigger the popup visibility when clicked
    setTimeout(() => {
      setShowPopup(false); // Optionally hide it after a delay
    }, 3000); // Adjust time as needed
  };

  return (
    <button className='view-campaign' onClick={handleClick}>{text}<span>{icon}</span></button>
  )
}

export default Button