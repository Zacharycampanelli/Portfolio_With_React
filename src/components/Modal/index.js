import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Modal, Button} from 'react-bootstrap';

const Modal = ({  currentPhoto }) => {
  console.log("hi", currentPhoto);
  const { name, tools, description, github, deployed, file, index } = currentPhoto;

  return (
    <div className="modal show fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            
            <h4 className="modal-title">{name}</h4>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            <img src={require(`../../assets/images/spellingpractice.png`)} />
            <p className="modal-text">{tools}</p>
            <p>{description}</p>
            <div className="modal-link">
              GitHub Repo:
              <a href="https://github.com/Zacharycampanelli/SpellingPractice">
                https://github.com/Zacharycampanelli/SpellingPractice
              </a>
              <br />
              Deployed Website:
              <a href="https://zacharycampanelli.github.io/SpellingPractice/">
                https://zacharycampanelli.github.io/SpellingPractice/
              </a>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-default" type="button" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
