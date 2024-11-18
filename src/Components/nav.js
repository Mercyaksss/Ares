import React, { useState } from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
import Popup from './popup';
import Navtoggle from './navtoggle';

function Nav() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isNavtoggleVisible, setIsNavtoggleVisible] = useState(false);

  const handleConnectWalletClick = () => {
    setIsPopupVisible(true);
    console.log('popup visible');
    setTimeout(() => {
      setIsPopupVisible(false); // Hide popup after a delay (optional)
    }, 3000); // Adjust the time in milliseconds as needed
  };

  const handleMenuClick = () => {
    setIsNavtoggleVisible((prev) => !prev); // Toggle Navtoggle visibility
  };

  return (
    <>
      <nav>
        <img src="assets/ARES.svg" alt="ARES logo" />
        
        {/* Menu icon for small screens */}
        <span className="menu-icon" onClick={handleMenuClick}>☰</span>

        <div className="nav-middle">
          <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <p>HOME</p>
          </NavLink>
          <NavLink to="/myDashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <p>MY DASHBOARD</p>
          </NavLink>
        </div>        
        <button className="connect-wallet" onClick={handleConnectWalletClick}>
          Connect Wallet
        </button>
        
        {isPopupVisible && <Popup />}
      </nav>

      {/* Show Navtoggle if isNavtoggleVisible is true */}
      {isNavtoggleVisible && <Navtoggle />}
    </>
  );
}

export default Nav;
