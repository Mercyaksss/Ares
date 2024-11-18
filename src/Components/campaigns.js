import React, { useState } from 'react';
import './campaigns.css';
import Button from './button';
import Progressbar from './progressbar';
import { FaArrowRight } from "react-icons/fa";
import Popup from './popup';

function Campaigns() {
  const campaigns = [
    {
      Image: 'assets/image-2.jpeg',
      title: "Clean Water for All",
      description: "Providing safe drinking water to remote villages facing water scarcity."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Save the Rainforests",
      description: "Supporting conservation efforts to protect rainforests and their biodiversity."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Feed the Hungry",
      description: "Raising funds to provide meals for families in need around the world."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Solar Power for Schools",
      description: "Installing solar panels in rural schools to provide sustainable electricity."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Empowering Women Entrepreneurs",
      description: "Offering microloans and resources to help women start their own businesses."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Disaster Relief Fund",
      description: "Helping communities rebuild after natural disasters with emergency supplies."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Educate a Child",
      description: "Funding educational materials and scholarships for underprivileged children."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Save Endangered Species",
      description: "Supporting efforts to protect and restore habitats for endangered animals."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Health Clinics for Remote Areas",
      description: "Setting up mobile health clinics to serve remote areas lacking healthcare access."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Ocean Cleanup Initiative",
      description: "Reducing ocean pollution by organizing large-scale cleanups and awareness campaigns."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Support Veterans",
      description: "Providing resources and support for veterans transitioning back to civilian life."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Mental Health Awareness",
      description: "Raising awareness and providing resources for mental health support."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Youth Sports Programs",
      description: "Funding sports programs for underprivileged youth to encourage active lifestyles."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Plant a Million Trees",
      description: "Aiming to plant a million trees worldwide to combat climate change."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Animal Rescue Shelter",
      description: "Supporting shelters that rescue and care for abandoned animals."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Library for All",
      description: "Building libraries in underserved communities to promote literacy."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Homeless Shelter Support",
      description: "Providing food, shelter, and resources for the homeless community."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Accessible Education for All",
      description: "Advocating for inclusive education and providing assistive devices."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Art Programs for At-Risk Youth",
      description: "Creating art programs to help at-risk youth express themselves and find purpose."
    },
    {
      Image: 'assets/image-2.jpeg',
      title: "Eco-Friendly Fashion",
      description: "Promoting sustainable fashion through awareness and eco-friendly alternatives."
    }
  ]
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  // Show all campaigns if expanded, otherwise show first 8 campaigns
  const displayedCampaigns = isExpanded ? campaigns : campaigns.slice(0, 8);
  return (
    <>
      <div className='campaigns-grid-container'>
        <div className={`campaigns-grid ${isExpanded ? 'expanded' : ''}`}>
          {displayedCampaigns.map((item, index) => (
            <div className='campaign-card' key={index}>
              <img src={item.Image} alt={item.title} className='campaign-image' />
              <div className='campaign-text'>
                <h3 className='campaign-title'>{item.title}</h3>
                <p className='campaign-description'>{item.description}</p>
              </div>
              <div className='progress-container'>
                <Progressbar />
                <Button 
                text='View Campaign' 
                icon={<FaArrowRight />} 
                showPopup={isPopupVisible} 
                setShowPopup={setIsPopupVisible} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='see-all' onClick={toggleExpand}>
        {isExpanded ? 'See Less' : 'See All'}
      </button>

      {/* Show the Popup if it's visible */}
      {isPopupVisible && <Popup/>}
    </>
  );
}

export default Campaigns;
