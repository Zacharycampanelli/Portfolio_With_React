import React from 'react';

function Nav() {
  return (
    <header class="banner">
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" id="navbar-title" href="#">
            Zachary Campanelli
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapseNavbar"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="collapseNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#about_me">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#my_work">
                  My Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact_me">
                  Contact Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#resume">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="content-area">
        <div class="content animate__animated animate__fadeIn animate__delay-1s animate__slow centered">
          <img id="logo" src="./assets/images/logo.png" alt="logo" />
          <h2>Full-Stack Developer</h2>
        </div>
      </div>
    </header>
  );
}

export default Nav;
