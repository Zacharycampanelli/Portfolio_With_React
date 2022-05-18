import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

const Nav = (props) => {
  const { sectionTitles = [], setCurrentCategory, currentCategory } = props;

  console.log(sectionTitles);
  console.log(currentCategory);
  return (
    <header className="flex-row">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" id="navbar-title" href="/">
            Zachary Campanelli
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapseNavbar"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapseNavbar">
            <ul className="navbar-nav">
              {sectionTitles.map((category) => (
                <li className="nav-item">
                  <a
                    href={`#${category.ref}`}
                    className={`mx-1 nav-link ${currentCategory.title === category.title && 'navActive'}`}
                    key={category.title}
                  >
                    <span
                      onClick={() => {
                        setCurrentCategory(category);
                      }}
                    >
                      {category.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
