import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const phone = <FontAwesomeIcon icon={faMobile} />;
  const envelope = <FontAwesomeIcon icon={faEnvelopeSquare} />;
  const github = <FontAwesomeIcon icon={faGithubSquare} />;
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
  const spotify = <FontAwesomeIcon icon={faSpotify} />;
  return (
    <section className="footer">
      <div className="container-fluid">
        <div className="row d-flex justify-content-around"></div>
        <div className="row d-flex justify-content-around">
          <div className="col-2 text-center">
            <a href="tel:+18603076172">
              <i className="fas fa-mobile contact-icon"></i>
              <div className="d-none">307-6172</div>
              <div className="contact-icon">{phone}</div>
            </a>
          </div>
          <div className="col-2 text-center">
            <a href="mailto:zaccamp@optonline.net">
              <i className="fas fa-envelope-square contact-icon"></i>
              <div className="d-none">zaccamp@optonline.net</div>
              <div className="contact-icon">{envelope}</div>
            </a>
          </div>
          <div className="col-2 text-center">
            <a href="https://github.com/Zacharycampanelli">
              <i className="fab fa-github-square contact-icon"></i>
              <div className="d-none">GitHub</div>
              <div className="contact-icon">{github}</div>
            </a>
          </div>
          <div className="col-2 text-center">
            <a href="https://www.linkedin.com/in/zackcampanelli/">
              <i className="fab fa-linkedin contact-icon"></i>
              <div className="d-none">Linkedin</div>
              <div className="contact-icon">{linkedIn}</div>
            </a>
          </div>
          <div className="col-2 text-center">
            <a href="https://open.spotify.com/user/1280141912?si=15070da5e93f4736">
              <i className="fab fa-spotify contact-icon"></i>
              <div className="d-none">Spotify</div>
              <div className="contact-icon">{spotify}</div>
            </a>
          </div>
        </div>

        <div className="copyright">Copyright &#169;2022 Zachary Campanelli</div>
      </div>
    </section>
  );
}

export default Footer;
