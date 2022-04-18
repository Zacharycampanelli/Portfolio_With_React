import React from 'react';
import './Modal.css';

const Modal = ({ closeModal, photo }) => {
  const { name, tools, description, github, deployed, file } = photo;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}> X </button>
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="body">
          <img src={require(`../../assets/images/${file}.png`)} className="modalImage" />
          <br />
          <p className="modalText">{description}</p>
          <p className="modalTextTools">Created Using: {tools}</p>
        </div>
        <div className="footer">
          <ul>
            <li>
              Repo: <a href={github}>{github}</a>
            </li>
            <li>
              Deployed: <a href={deployed}>{deployed}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
