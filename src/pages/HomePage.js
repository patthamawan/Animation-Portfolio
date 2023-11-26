import React from 'react';
import { Container } from 'react-bootstrap';

import AnimReel from '../components/AnimReel';

const HomePage = () => {
  return(
    <div>
      <Container>
        <div className="homepage">
            <div className='title'>
              <h1>Animation Portfolio</h1>
            </div>
            <div className='video'>
              <div className='demo-reel'>
                <AnimReel />
              </div>
              <div className='email'>
                <a href="mailto:p.iteeyaporn@gmail.com">
                  <p>p.iteeyaporn@gmail.com</p>
                </a>
              </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage

