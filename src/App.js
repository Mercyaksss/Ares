import React, { useState } from 'react';
import Home from "./pages/home";
import MyDashboard from './pages/myDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // State to manage overlay visibility
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Function to toggle overlay visibility
  const toggleOverlay = () => {
    console.log('it worksss!!!')
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            index 
            element={<Home isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />} 
          />
          <Route 
            path="/home" 
            element={<Home isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />} 
          />
          {/* Ensure props are passed to MyDashboard */}
          <Route 
            path="/myDashboard" 
            element={<MyDashboard isOverlayVisible={isOverlayVisible} toggleOverlay={toggleOverlay} />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
