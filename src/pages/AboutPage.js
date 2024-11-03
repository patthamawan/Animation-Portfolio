import React, {useEffect ,useCallback, useState, useEventListener} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MyPhoto from '../img/Profile.png';

const About = () => {
  return(
    <div>
      <Container>
        <div className="about-me">
          <div className='my-info'>
            <img src={MyPhoto}/>
            <div className='about'>
              <p>Hey, I'm Nune. I've been in the creative game for almost 10 years, starting at Staffordshire University, where I learned the ins and outs of various animations.</p>
              <p>
              I spent nearly 4 years animating for children's TV shows before venturing into the world of UX/UI design and web design. 
              I navigated that creative universe for a solid 5 and a half years, working with various fast-paced startups that boosted my confidence in strong teamwork, communication, and organizational skills.
              </p>
              <p>
              I had a fantastic opportunity to design UX/UI for a 3D animation app that worked on browsers. 
              This experience reignited my passion for animation, prompting me to switch back to 3D animation, and I've never looked back.
              </p>
              <p>
              I'm a self-motivated individual, always looking for opportunities to improve myself in any way I can. My ultimate goal is to someday work on a major feature film project or an AAA game. 
              I aspire to be the kind of animator who is very flexible in style. Crafting stories that resonate with people holds a special kind of magic for me, and I'm excited about the prospect of being part of that enchanting process.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About

