import React, {useEffect ,useCallback, useState, useEventListener} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MyPhoto from '../img/me.png';
import Instagram from '../img/ig.png';
import Vimeo from '../img/vimeo.png';
import Linkedin from '../img/linkedin.png';

const About = () => {
  return(
    <div>
      <Container>
        <div className="about-me">
          <div className='title'>
                <h1>About me</h1>
          </div>
          <div className='my-info'>
          <Row>
              <Col md={6}>
              <div className='about'>
                <p>Hey, I'm Nune. My legal name is Patthamawan Iteeyaporn. I've been in the creative game for almost 10 years, starting at Staffordshire University, where I learned the ins and outs of various animations.</p>
                <p>
                I spent nearly 4 years animating for Kid TV shows before venturing into the unknown world of UX/UI design and web design. 
                I navigated that creative universe for a solid 5 and a half years, working with various fast-paced startups that boosted my confidence in strong teamwork, communication, and organizational skills.
                </p>
                <p>
                I had a fantastic opportunity to design UX/UI for a 3D animation app that worked on browsers. 
                This experience reignited my passion for animation, prompting me to switch back to 3D animation, and I've never looked back.
                </p>
                <p>
                I'm a self-motivated individual, always looking for opportunities to improve myself in any way I can. My ultimate goal is to someday work on feature films and bring joy to the world. 
                Crafting stories that resonate with people holds a special kind of magic for me, and I'm excited about the prospect of being a part of that enchanting process.
                </p>
                
              </div>
              <div className='email'>
                <a href="mailto:p.iteeyaporn@gmail.com">
                  <p>p.iteeyaporn@gmail.com</p>
                </a>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/in/p-iteeyaporn-750a3936" target="_blank">
                  <img src={Linkedin}/>
                </a>
                <a href="https://www.instagram.com/nunny_art/" target="_blank"><img src={Instagram}/></a>
              </div>
              </Col>
              <Col md={6}>
                <div className='profilePic'>
                  <img src={MyPhoto}/>
                </div>
              
              </Col>
            </Row>
            
      
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About

