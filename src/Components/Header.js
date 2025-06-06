import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className='lftSidColumn'>
            <div className='profileImage'>
                <img src="/images/profile-pic.jpg" alt="Profile" />
            </div>
            
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/experience">Experience</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Header
