import React, { useState } from 'react';

function Photo() {
  const [photos] = useState([
    {
      name: 'Spelling Practice',
      tools: 'HTML | CSS | Javascript | Bulma',
      description:
        'Spelling Practice is an app that can help anyone improve their spelling. This application uses separate API calls to display the description of a word, and speak the word out loud, leaving the user to take their best guess at spelling that particular word',
      github: 'https://github.com/Zacharycampanelli/SpellingPractice',
      deployed: 'https://zacharycampanelli.github.io/SpellingPractice/',
      file: 'spellingpractice',
    },
    {
      name: 'Weather Dashboard',
      tools: 'Javascript',
      description:
        'A weather dashboard page that uses the OpenWeatherMap API. The user searches for a city and is presented with both the current day forecast as well as the next five days.',
      github: 'https://github.com/Zacharycampanelli/Weather_Dashboard',
      deployed: 'https://zacharycampanelli.github.io/Weather_Dashboard/',
      file: 'weather',
    },
    {
      name: 'Personal Info Locker',
      tools: 'Node.js | Express.js | Handlebars',
      description:
        'An application that holds your personal login information for each and every website you need. This project was built using Express.js, Sequelize, and Handlebars',
      github: 'https://github.com/Zacharycampanelli/Personal_Info_Locker',
      deployed: 'https://sleepy-cove-57890.herokuapp.com/',
      file: 'personalinfolocker',
    },
    {
      name: 'Password Generator',
      tools: 'Javascript',
      description:
        'Creates a string of characters following the conditions the User asks for to create a truly random password',
      github: 'https://github.com/Zacharycampanelli/Password_Generator',
      deployed: 'https://zacharycampanelli.github.io/Password_Generator/',
      file: 'password',
    },
    {
      name: 'Taskmaster Pro',
      tools: 'JavaScript | JQuery',
      description:
        'Taskmaster Pro is a Kanban style application that allows the user to track and categorize tasks based off of their progress. The data is saved in local storage and the application makes use of multiple third-party APIs including bootstrap, jQuery, jQuery UI, and Moment.js',
      github: 'https://github.com/Zacharycampanelli/Taskmaster_Pro',
      deployed: 'https://zacharycampanelli.github.io/Taskmaster_Pro/',
      file: 'taskmaster',
    },
    {
      name: 'Solar Bears',
      tools: 'HTML | CSS',
      description: 'A website for an imaginary Solar Panel Company',
      github: 'https://github.com/Zacharycampanelli/Solar_Bears',
      deployed: 'https://zacharycampanelli.github.io/Solar_Bears/',
      file: 'solarbears',
    },
  ]);

  return (
    <div className="flex-row">
      {photos.map((image) => (
        <img
          src={require(`../../assets/images/${image.file}.png`)}
          alt={image.name}
          className="img-thumbnail col-12 col-md-4"
          // onClick={}
          key={image.name}
        />
      ))}
    </div>
  );
}

export default Photo;
