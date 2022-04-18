import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="contact" id="contact_me">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-left">
            <h1 data-testid="h1tag" className="section_title">
              Contact me
            </h1>
            <form id="contact-form " onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <br />
              <div className="form-row text-center mx-auto">
                <button
                  data-testid="button"
                  type="submit"
                  className=" row d-flex justify-content-center align-content-center "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
