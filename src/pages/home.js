import React from 'react';
import Nav from '../Components/nav';
import './home.css';
import Campaigns from '../Components/campaigns';
import Footer from '../Components/footer';
import CreateCampaign from '../Components/createCampaign';
// import Popup from '../Components/popup';

function Home({ isOverlayVisible, toggleOverlay }) {
  return (
    <>
      <Nav />
      <div className='main'>
        <div className='hero'>
          {/* <img src='assets/background.png'/> */}
          <h1>Ares Crowdfunding</h1>
          <p>Fund the change, one day at a time.</p>
          <button 
            className='create-campaign' 
            onClick={toggleOverlay}
          >
            Create Campaign
          </button>
        </div>
        <div>
          <h2>Latest Additions</h2>
          <Campaigns />
        </div>
        <Footer />
      </div>
      {/* Overlay Section */}
      {isOverlayVisible && (
        <CreateCampaign toggleOverlay={toggleOverlay} />
      )}
      
    </>
  );
}

export default Home;
