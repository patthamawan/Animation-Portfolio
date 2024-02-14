import React from 'react';
import ReactPlayer from 'react-player';

import Linkedin from '../img/linkedin.png';
import Instagram from '../img/ig.png';
import Email from '../img/mail.png';


const contacts = () => {
  return (
    <div className='contacts'>
        <a href="https://www.linkedin.com/in/p-iteeyaporn-750a3936" target="_blank">
            <img src={Linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/nunny_art/" target="_blank">
            <img src={Instagram} alt="Instagram" />
        </a>
        <a href="mailto:p.iteeyaporn@gmail.com" target="_blank">
            <img src={Email}  />
        </a>
    </div>
  );
};

export default contacts;