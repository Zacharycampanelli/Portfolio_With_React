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
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
           Zachary Campanelli
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li> */}
          {sectionTitles.map((category) => (
            <a href={`#${category.ref}`}
              className={`mx-1 ${
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
      </nav>
    </header>
  );



//   return (
//     <header class="banner">
//       <nav class="navbar navbar-expand-md navbar-dark">
//         <div class="container-fluid">
//           <a class="navbar-brand" id="navbar-title" href="#">
//             Zachary Campanelli
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#collapseNavbar"
//             aria-controls="navbarsExample01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse justify-content-end" id="collapseNavbar">
//             <ul class="navbar-nav">
            
//               <li class="nav-item">
//                 <a class="nav-link" href="#about_me">
//                   About Me
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#my_work">
//                   My Work
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#contact_me">
//                   Contact Me
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#resume">
//                   Resume
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div class="content-area">
//         <div class="content animate__animated animate__fadeIn animate__delay-1s animate__slow centered">
//           <img id="logo" src={logo} alt="logo" />
//           <h2>Full-Stack Developer</h2>
//         </div>
//       </div>
//     </header>
//   );
}

export default Nav;
