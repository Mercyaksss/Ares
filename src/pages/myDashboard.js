import React from 'react';
import Button from '../Components/button';
import './myDashboard.css';
import { FaPlus } from "react-icons/fa";
import Nav from '../Components/nav';
import Footer from '../Components/footer';
import CreateCampaign from '../Components/createCampaign';

function MyDashboard({ isOverlayVisible, toggleOverlay }) {
  return (
    <>
      <div className='dashboard-main'>
        <Nav />
        <h2>My Campaigns</h2>
        <div className='content'>
          <h1>Wow, such empty.</h1>
          <p>Start by creating a campaign</p>
          <div className='button-container2'>
            {/* Pass toggleOverlay to the Button */}
            <Button text='Create Campaign' icon={<FaPlus />} onClick={toggleOverlay} />
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Conditionally Render CreateCampaign Overlay */}
      {isOverlayVisible && (
        <CreateCampaign toggleOverlay={toggleOverlay} />
      )}
    </>
  );
}

export default MyDashboard;
