import React from 'react';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Experience = () => {
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
                <div className='col col-sm-12 col-md-12'>
                  <h1>Misbah Ul Haq</h1>
                  <h6>Sr. WordPress Developer / Frontend Developer</h6>
                </div>
                <div className='col col-sm-12 col-md-12'>
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
                  
                  <div className='exp-wrap'>
                    <div className='row mb-3'>
                      <div className='col'>
                        <h3>Team Lead WordPress / Frontend Developer</h3>
                        <h5>Digital Gravity</h5>
                      </div>
                      <div className='col'>
                        <h4 className='text-end'>October 2023</h4>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>I joined Digital Gravity in October 2023, where I have been responsible for WordPress development and customization, including extensive work with Advanced Custom Fields (ACF). My role also involves crafting responsive layouts using HTML, CSS, JavaScript, and jQuery, as well as creating dynamic Elementor widgets to enhance website functionality and flexibility.</p>
                        <ul>
                          <li>Led a team of 4 junior developers and supported their professional growth and development.</li>
                          <li>Implemented WordPress security best practices.</li>
                          <li>Built custom and dynamic Elementor widgets.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='exp-wrap'>
                    <div className='row mb-3'>
                      <div className='col'>
                        <h3>Team Lead WordPress / Frontend Developer</h3>
                        <h5>Tree House Consultancy</h5>
                      </div>
                      <div className='col'>
                        <h4 className='text-end'>September 2021</h4>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>During my time at Tree House Consultancy, I was responsible for end-to-end WordPress development and customization, delivering high-quality, responsive websites tailored to client needs. My role also extended to collaborating on ASP.NET and Magento 2.0 projects, contributing across both front-end and integration tasks.</p>
                        <ul>
                          <li>Led and mentored 2 junior developers by providing technical guidance and support across various WordPress development tasks.</li>
                          <li>Collaborated closely with ASP.NET developers to design and implement responsive front-end interfaces for ASP.NET-based applications.</li>
                          <li>Worked on the front-end development of Magento 2.0 projects, contributing to layout implementation, styling, and seamless integration with Magento functionality.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='exp-wrap'>
                    <div className='row mb-3'>
                      <div className='col'>
                        <h3>Sr. WordPress Developer/ Frontend Developer</h3>
                        <h5>Olive Digital</h5>
                      </div>
                      <div className='col'>
                        <h4 className='text-end'>September 2021</h4>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>From November 2020 to August 2021, I worked at Olive Digital as a Sr. WordPress Developer and Front-End UI/UX Designer. In this role, I was responsible for end-to-end WordPress development, including theme customization, plugin integration, and implementing tailored solutions based on client requirements. I played a key role in translating UI/UX designs into fully responsive, user-friendly interfaces, ensuring seamless performance across devices and browsers. Additionally, I collaborated with cross-functional teams to deliver visually engaging and functionally robust websites that aligned with both user needs and business goals.</p>
                        <ul>
                          <li>Developed and implemented custom fields using Advanced Custom Fields (ACF), seamlessly integrating them into custom WordPress page templates to enable dynamic and flexible content management.</li>
                          <li>Collaborated with project managers to efficiently address and resolve assigned tasks, ensuring timely delivery and alignment with project objectives at Olive Digital.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='exp-wrap'>
                    <div className='row mb-3'>
                      <div className='col'>
                        <h3>Sr. WordPress Developer/ Frontend Developer</h3>
                        <h5>Symmetry Group</h5>
                      </div>
                      <div className='col'>
                        <h4 className='text-end'>September 2018</h4>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>September 10 2018. Join Symmetry Groups As a Sr. WordPress Developer/Front-End UI/UX Developer & Web Designer Professional. Here is responsibilities  WordPress Customization, javaScript, jQuery Responsive Layouts (Grid System) Bootstrap, Skeleton, Jupiter Theme, U Design Theme, Apps Design, etc. </p>
                        <ul>
                          <li>Led junior developers, guidance and support in WordPress development & Frontend tasks.</li>
                          <li>At Symmetry Group, my responsibilities also included creating and working on custom page templates in WordPress.</li>
                          <li>Collaborating & working with PHP Developer at Symmetry Group to resolve tasks.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='exp-wrap'>
                    <div className='row mb-3'>
                      <div className='col'>
                        <h3>Sr. WordPress Developer/ Frontend Developer</h3>
                        <h5>Enet Technologies.Inc.</h5>
                      </div>
                      <div className='col'>
                        <h4 className='text-end'>March 2014</h4>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>March 20 2014 to August 31 2018. I joined Enet Technologies.Inc. As a Sr. Front-End UI/UX Developer & Web Designer Professional. Here is responsibilities  WordPress Integration, Responsive Layouts (Grid System) Bootstrap, Skeleton, Jupiter Theme,  U Design Theme, Apps Design, etc.</p>
                        <ul>
                          <li>Enet Technologies used to do WordPress development and customization.</li>
                          <li>Created custom fields using ACF (Advanced Custom Fields) and displayed them in custom page templates.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='exp-wrap'>
                    <div className='row mb-3'>
                      <div className='col'>
                        <h3>Sr. WordPress Developer/ Frontend Developer</h3>
                        <h5>Server4Sale.Inc.</h5>
                      </div>
                      <div className='col'>
                        <h4 className='text-end'>April 2013</h4>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>April 15th 2013 to January 2014. I joinSever4Sa.Inc. As a Sr. Front End UI/UX Developer & Web Designer Professional. In Sever4Sale I worked on WordPress Integration, Responsive Layouts (Grid System) Bootstrap, Skeleton, Jupiter Theme, U Design Theme, etc.</p>
                        <ul>
                          <li>Collaborating & working with PHP Developer at Server4Sale.Inc. to resolve tasks.</li>
                          <li>Created custom fields using ACF (Advanced Custom Fields) and displayed them in custom page templates.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='exp-wrap'>
                    <div className='row mb-3'>
                      <div className='col'>
                        <h3>WordPress Developer/ Frontend Developer</h3>
                        <h5>Jeem Solutions</h5>
                      </div>
                      <div className='col'>
                        <h4 className='text-end'>November 2011</h4>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>November 2011 to April 2013. I joined Jeem Services Solution.Inc. Here is my responsibilities are PHP based websites, Graphics Designs, & WP7 Phone Applications & etc.</p>
                        <ul>
                          <li>Collaborating & working with Backend Developer to resolve tasks.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='exp-wrap'>
                    <div className='row mb-3'>
                      <div className='col'>
                        <h3>WordPress Developer/ Frontend Developer</h3>
                        <h5>Enet Technologies.Inc.</h5>
                      </div>
                      <div className='col'>
                        <h4 className='text-end'>April 2009</h4>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <p>I began my career in April 2009 at Enet Technologies, a Houston-based company, as a Junior Web Designer/Developer. My responsibilities included designing and developing websites using HTML, CSS, and jQuery, as well as working on WordPress development and customization to meet client-specific requirements.</p>
                      </div>
                    </div>
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

export default Experience
