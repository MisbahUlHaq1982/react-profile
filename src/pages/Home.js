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
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 main-heading'>
                  <h1>Misbah Ul Haq</h1>
                  <h6>Sr. WordPress Developer / Frontend Developer</h6>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
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
                  <p>Seasoned Senior WordPress Developer and Frontend Engineer with 15+ years of experience building high-performance, scalable websites and custom digital solutions.</p>
<p>Specialized in custom WordPress themes, plugins, dynamic Elementor widgets, and headless WordPress architectures. Deep expertise in PHP, MySQL, JavaScript, HTML5, and CSS3, with strong command over WooCommerce, ACF Pro, and third-party API integrations.</p>
<p>Currently focused on modern headless WordPress development, with solid hands-on experience in building decoupled applications using Next.js (App Router, Server Components, SSR/SSG) alongside WordPress as a headless CMS via WPGraphQL and custom REST endpoints.</p>
<p>Known for writing clean, maintainable code and delivering fast, pixel-perfect, fully dynamic solutions that drive business results.</p>
                </div>
              </div>

              <div className='row'>
                <div className='col-12 col-sm-6 col-md-6'>
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
                <div className='col-12 col-sm-6 col-md-6'>
                  <div className='skills'>
                    <h2>Skills</h2>
                    <ul>
                      <li>WordPress Customization</li>
                      <li>Headless Wordpress</li>
                      <li>PHP</li>
                      <li>Magento 2.0</li>
                      <li>React JS</li>
                      <li>Vue JS</li>
                      <li>next.js</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
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
