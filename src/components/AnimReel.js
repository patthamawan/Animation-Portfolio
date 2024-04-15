import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';


const VideoFile = () => {
  // Modal with passowrd
  // const [isModalOpen, setIsModalOpen] = useState(true);
  // const [password, setPassword] = useState('');
  // const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  // const [isShaking, setIsShaking] = useState(false);

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   setIsShaking(false); // Reset shaking when typing a new passwor
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  //   // You can add additional logic here if needed
  // };

  // const handlePlayButtonClick = () => {
  //   // Check if the entered password is correct
  //   if (password === '551462') {
  //     setIsPasswordCorrect(true);
  //     setIsModalOpen(false); // Close the modal after entering the correct password
  //   } else {
  //     setIsShaking(true); // Trigger shaking animation on incorrect password
  //   }
  // };

  // // const handleKeyPress = (e) => {
  // //   if (e.key === 'Enter') {
  // //     handlePlayButtonClick(); // Trigger play button click on Enter key press
  // //   }
  // // };

  const videoVFX = '/DemoReel_v5.mov';
  const videoCartoon = '/CartoonReel.mov';

  // Tabs

  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) setActiveTab(tab);
  }, [location]);

  const handleSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <div>
      <Tabs
      id="controlled-tab-example"
      activeKey={activeTab}
      onSelect={handleSelect}
    >
      <Tab eventKey="home" title="Showreel">
        <VideoPlayer videoUrl={videoVFX} />
      </Tab>
      <Tab eventKey="cartoon" title="Cartoon Reel">
        <VideoPlayer videoUrl={videoCartoon} />
      </Tab>
    </Tabs>
      
      {/* {isModalOpen && (
        <VideoPlayer videoUrl={videoUrl} />
        <div className="password-box">
          <div className="modal-content">
            <p>Enter Password to View Animation Reel</p>
            <input
              type = "password"
              value = {password}
              onChange = {handlePasswordChange}
              // onKeyPress={handleKeyPress}
              className = {`password-input ${isShaking ? 'shake' : ''} ${
                !isPasswordCorrect && isShaking ? 'incorrect' : ''
              }`}
            />
            <button onClick={handlePlayButtonClick}>Enter</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default VideoFile;


// https://nunefolio.co.uk/?tab=cartoon to open website with cartoon tab