// import React, { useEffect , useRef } from 'react'
// import pdf from "../pdf/resume.pdf";
// import hero from "./data/hero.json";
// import Typed from "typed.js";



// const Home = () => {

//   const typedRef = useRef(null);
//   useEffect(() => {
//     const options = {
//       strings: [
//         "Welcome to my profile",
//         "I am a Student",
//         "I am working on web development",
//         "Frontend Developer (React.js)",
//       ],
//       typeSpeed: 40,
//       backSpeed: 40,
//       loop: true,
//     };

//     const typed = new Typed(typedRef.current, options);

//     return () =>{
//       typed.destroy()
//     };

//   },[]);

//   return (
//   <>
//   <div className='container home' id = "home">

//     <div className="left"
//     data-aos="fade-up-right" data-aos-duration="1000"
//     >
//       <h1 ref = {typedRef}>
       
//         </h1>

//       <a href={pdf} download = "resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
//     </div>
//     <div className="right">
//       <div className="img"
//        data-aos="fade-up-left" data-aos-duration="1000"
//       >
//       <img src={hero.imgSrc} alt="hero" />
//       </div>
      
//     </div>
//   </div>
  
  
//   </>
//   )
// }

// export default Home;



import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/resume.pdf';
// import hero from './data/hero.json';
import Typed from 'typed.js';


const Home = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: [
        'Welcome to my profile',
        'I am working on web development',
        'Frontend Developer (React.js)',
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        {/* <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img">
            <img src={hero.imgSrc} alt="hero" />
          </div> */}
        
  </div>
  );
};

export default Home;







