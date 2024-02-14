import React, {useEffect ,useCallback, useState, useEventListener} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../components/VideoUpload';

import LEGOCityNL from '../img/work/LEGOCityNL.png';
import BrothersTO2S from '../img/work/BrothersTO2S.png';
import LEGOFriends from '../img/work/LEGOFriends.png';
import LEGOWV from '../img/work/LEGOWV.png';
import Mahajanaka from '../img/work/Mahajanaka.png';
import TheUlitmatePower from '../img/work/TheUlitmatePower.png';
import Sook from '../img/work/Sook.png';
import ScienceKids from '../img/work/ScienceKids.png';

const WorkPage = () => {
  return(
    <div>
      <Container>
        <div className='released-works'>
          <div className='top-work'> 
            <a href="https://youtu.be/jCRPFZPjlOc?si=qnss2C-suv9PeI57" target="_blank"><img src={LEGOCityNL}/></a>
            <a href="https://www.youtube.com/watch?v=adNAxn-NxK8" target="_blank"><img src={BrothersTO2S}/></a>
            <a><img src={LEGOFriends}/></a>
            <a href="https://www.youtube.com/watch?v=q-0yTGVRPvk" target="_blank"><img src={LEGOWV}/></a>
          </div>
          
          <div className='bottom-work'>
            <a href="https://www.youtube.com/watch?v=XoV8h2K-T0A" target="_blank"><img src={Mahajanaka}/></a>
            <a href="https://www.youtube.com/watch?v=9Rmlc3c2_tU&t=8s" target="_blank"><img src={TheUlitmatePower}/></a>
            <a href="https://www.youtube.com/watch?v=jIPu0E6kO8g&list=PLyYRukshQTsUUYFkTAXaKmiB6zkKPQL3L&index=1" target="_blank"><img src={Sook}/></a>
            <a href="https://www.youtube.com/watch?v=0vsyKlSdey4&t=1s" target="_blank"><img src={ScienceKids}/></a>
          </div>
        </div>

        <div className="animation">
          <h3>Personal work</h3>
          <div className="videos">

              <Row>
                  {videos.map((video) => (
                      <Col key={video.id} lg={6} md={12} sm={12}>
                          <VideoPlayer
                              videoUrl={video.videoUrl}
                              thumbnailUrl={video.thumbnailUrl}
                          />
                      </Col>
                  ))}
              </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default WorkPage

