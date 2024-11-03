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

  const videoVFX = '/DemoReel_11.24.mov';
  const videoCartoon = '/CartoonReel160924.mov';

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
      <Tab eventKey="home" title="Demo Reel">
        <VideoPlayer videoUrl={videoVFX} />
        <p>If the video player doesn't work, please click this <a href="https://vimeo.com/934798920" target="_blank"><b style={{ color: 'blue' }} >link</b></a> to watch it on Vimeo </p>
      </Tab>
      <Tab eventKey="cartoon" title="Cartoon Reel">
        <VideoPlayer videoUrl={videoCartoon} />
        <p>If the video player doesn't work, please click this <a href="https://vimeo.com/920008782" target="_blank"><b style={{ color: 'blue' }} >link</b></a> to watch it on Vimeo </p>
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