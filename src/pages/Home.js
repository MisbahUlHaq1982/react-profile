import React from 'react';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <Header />
          </div>
          <div className='col-12 col-md-8'>
            <div className='rightSideColumn'>
              <div className='row mb-5 home-intro'>
                <div className='col'>
                  <h1>Misbah Ul Haq</h1>
                  <h6>Sr. WordPress Developer / Frontend Developer</h6>
                </div>
                <div className='col'>
                  <ul>
                    <li><FontAwesomeIcon icon={faLocationDot} /> <a href='https://www.google.com/maps/place/Model+Colony+Malir+Cantonment,+Karachi,+Pakistan/@24.9012372,67.1794362,15z/data=!3m1!4b1!4m6!3m5!1s0x3eb337623ec7436f:0x48231685184fd3f2!8m2!3d24.9023473!4d67.1892!16zL20vMDlwMWts?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D' target='_blank' rel='noopener noreferrer'>Model Colony, Karachi, Pakistan</a></li>
                    <li><FontAwesomeIcon icon={faPhone} /> +92 334 345 9950</li>
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} />{' '}
                      <a href="https://mail.google.com/mail/?view=cm&to=misu.kafi@gmail.com&su=Contact%20from%20Website&body=Hi%20Misu," target="_blank" rel="noopener noreferrer">misu.kafi@gmail.com</a>
                    </li>
                    <li><FontAwesomeIcon icon={faLinkedin} /> <a href='https://www.linkedin.com/in/misu82/' target='_blank' rel='noopener noreferrer'>/in/misu82/</a></li>
                    <li><FontAwesomeIcon icon={faGithub} /> <a href='https://github.com/MisbahUlHaq1982' target='_blank' rel='noopener noreferrer'>Github</a></li> 
                  </ul> 
                </div>
              </div>

              <div className='row mb-5'>
                <div className='col'>
                  <h2>About Me</h2>
                  <p>Seasoned Senior WordPress Developer and Frontend Engineer with 15+ years of experience building high-performance, scalable websites and custom digital solutions. Specialized in custom WordPress themes, plugins, and dynamic Elementor widgets, with deep expertise in PHP, MySQL, JavaScript, HTML5, and CSS3. Strong background in WooCommerce, ACF Pro, and third-party API integration. Currently exploring headless WordPress development, with growing experience in integrating decoupled setups using modern frontend frameworks like React.js and Vue.js. Known for writing clean, maintainable code and delivering pixel-perfect, fully dynamic solutions that align with business goals.</p>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='education'>
                    <h2>Education</h2>
                    <div className='education-wrapper'>
                      <h5>Intermediate</h5>
                      <h6>National College</h6>
                    </div>
                    <div className='education-wrapper'>
                      <h5>Matriculation</h5>
                      <h6>Texas Technical High School</h6>
                    </div>
                    <div className='education-wrapper'>
                      <h5>Web/Graphics Design Diploma</h5>
                      <h6>Bright Scope Institute</h6>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='skills'>
                    <h2>Skills</h2>
                    <ul>
                      <li>WordPress Customization</li>
                      <li>Headless Wordpress</li>
                      <li>React JS</li>
                      <li>Vue JS</li>
                      <li>JavaScript</li>
                      <li>Magento 2.0</li>
                      <li>Bootstrap / Custom Responsive</li>
                    </ul>
                  </div>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        
      </div>
    </>
  )
}

export default Home
