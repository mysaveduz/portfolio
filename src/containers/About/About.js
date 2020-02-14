import React,{ useState } from 'react';
import {  Tabs, Tab } from 'react-bootstrap';
import {withRouter} from 'react-router';

import AboutText from '../../components/AboutSection/AboutText/AboutText';
import Projects from '../../components/AboutSection/Projects/Projects';
import './About.css';
import Auxi from '../../hoc/Auxi/Auxi';
import Game from '../../components/Game/Game';
import ContactMe from '../../components/ContactMe/ContactMe';

const about = (props) => {
   const [key, setKey] = useState('about-me');

     return(
       <Auxi>
         <section className="About-Section">
         <h4>About me</h4>
           <div className="about-main">
            <nav className="my-sidenav">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="about-me" title="About me">
                  <AboutText />
                  <Game />
                </Tab>
                <Tab eventKey="projects" title="My projects">
                  <Projects />
                </Tab>
                <Tab eventKey="contact-me" title="Contact me">
                  <ContactMe />
                </Tab>
            </Tabs>
            </nav>
          </div>
         </section>
       </Auxi>
     );
  }


export default withRouter(about);

// const { location } = props;

// <Route path="/about-me" exact render={() => (
//   <Fragment>
//     <AboutText />
//     <ContactMe />
//   </Fragment>
// )}/>
// <Route path="/about-me/projects" exact  render={() => (
//   <Fragment>
//     <Projects />
//     <Game width="100%"/>
//   </Fragment>
// )}/>



// <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
//       <Tab eventKey="home" title="Home">
//         <Sonnet />
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         <Sonnet />
//       </Tab>
//       <Tab eventKey="contact" title="Contact" disabled>
//         <Sonnet />
//       </Tab>
//     </Tabs>






// <NavLink link="/about-me/interests" name="Interests"/>
// <NavLink link="/about-me/section"   name="Section"/>


// <Route path="/about-me/interests" exact component={Game} />
// <Route path="/about-me/section" exact component={Game} />
