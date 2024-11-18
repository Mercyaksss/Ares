import React from 'react'
import './createCampaigns.css'
import Input from './input';

function CreateCampaign({ toggleOverlay }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Create a New Campaign</h2>
        <Input title='Enter Campaign Name' placeholder='Campaign name'/>
        <Input title='Describe your Campaign' placeholder='Campaign description' istextarea/>
        <Input title='Goal(s) of the Campaign' placeholder='Campaign goal(S)'/>
        <div className='button-container'>
          <button className="close-overlay" onClick={toggleOverlay}>Add</button>  
          <button className="close-overlay" onClick={toggleOverlay}>Close</button>  
        </div>
        
      </div>
    </div>
  );
}

export default CreateCampaign;
