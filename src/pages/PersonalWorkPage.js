import React, {useEffect ,useCallback, useState, useEventListener} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../components/VideoUpload';
import Line from '../img/dashedLine.png';

const WorkPage = () => {
  return(
    <div>
      <Container>
        <div className='bg-img'>
          <img src={Line} />
        </div>
        <div className="animation">
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

