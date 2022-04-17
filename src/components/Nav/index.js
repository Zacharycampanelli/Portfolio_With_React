import React, {useState} from 'react';
import logo from '../../assets/images/logo.png'


function Nav(props) {
  // const [current, setCurrent] = useState
  const {
    sectionTitles = [],
    setCurrentCategory,
    currentCategory
  } = props;
  
  function categorySelected() {
    console.log("hello")
  }

  console.log(sectionTitles);
  console.log(currentCategory)
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
            <a href={`#${category.ref}`} 
              className={`mx-1 nav-link ${
                currentCategory.title === category.title && 'navActive'
                }`}
              key={category.title}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
              {category.title}
              </span>
            </a>
          ))}
           </ul>
          </div>
        </div>
      </nav>
    </header>
  );



  // return (
  //   <header className="banner">
  //     <nav className="navbar navbar-expand-md navbar-dark">
  //       <div className="container-fluid">
  //         <a className="navbar-brand" id="navbar-title" href="#">
  //           Zachary Campanelli
  //         </a>
  //         <button
  //           className="navbar-toggler"
  //           type="button"
  //           data-toggle="collapse"
  //           data-target="#collapseNavbar"
  //           aria-controls="navbarsExample01"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="collapse navbar-collapse justify-content-end" id="collapseNavbar">
  //           <ul className="navbar-nav">
            
//               <li className="nav-item">
//                 <a className="nav-link" href="#about_me">
//                   About Me
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#my_work">
//                   My Work
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#contact_me">
//                   Contact Me
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#resume">
//                   Resume
//                 </a>
//               </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

//       <div className="content-area">
//         <div className="content animate__animated animate__fadeIn animate__delay-1s animate__slow centered">
//           <img id="logo" src={logo} alt="logo" />
//           <h2>Full-Stack Developer</h2>
//         </div>
//       </div>
//     </header>
//   );
}

export default Nav;
