import React from 'react';
import { Container } from 'react-bootstrap';

import AnimReel from '../components/AnimReel';

const HomePage = () => {
  return(
    <div>
      <Container>
        <div className="homepage">
            <div className='video'>
              <div className='demo-reel'>
                <AnimReel />
              </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage
