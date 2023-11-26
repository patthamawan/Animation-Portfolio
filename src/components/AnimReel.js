import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { Container } from 'react-bootstrap';

const VideoFile = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const videoUrl = '/Portfolio2023.mp4';
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsShaking(false); // Reset shaking when typing a new passwor
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // You can add additional logic here if needed
  };

  const handlePlayButtonClick = () => {
    // Check if the entered password is correct
    if (password === '551462') {
      setIsPasswordCorrect(true);
      setIsModalOpen(false); // Close the modal after entering the correct password
    } else {
      setIsShaking(true); // Trigger shaking animation on incorrect password
    }
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     handlePlayButtonClick(); // Trigger play button click on Enter key press
  //   }
  // };

  return (
    <div>
      <VideoPlayer videoUrl={videoUrl} />
      {isModalOpen && (
        <div className="password-box">
          <div className="modal-content">
            <p>Enter Password to View</p>
            <input
              type = "password"
              value = {password}
              onChange = {handlePasswordChange}
              // onKeyPress={handleKeyPress}
              className = {`password-input ${isShaking ? 'shake' : ''} ${
                !isPasswordCorrect && isShaking ? 'incorrect' : ''
              }`}
            />
            <button onClick={handlePlayButtonClick}>ENTER</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFile;


