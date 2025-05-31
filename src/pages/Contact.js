import React from 'react';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
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
                  <h1>Contact</h1>
                  {/* <h6>Sr. WordPress Developer / Frontend Developer</h6> */}
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

              <div className='contact-wrap'>
                <div className='row mb-5'>
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

export default Contact
