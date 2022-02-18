import React from 'react';
//import coverImage from '../../assets/cover/portfolioImage.jpg';
import headShot from '../../assets/Photo/headshot.heic';

function AboutMe() {
  return (
    <section>
 
  <h1 id="aboutMe">About Me</h1>
  <img src= {headShot} className="my-5 rounded float-right" style={{ width: "12.5%" }} alt="cover" />   
  <p> New programmer about to finish up my coding boot camp.  
      I was inspired throughout the course and looking forward to starting my career.  
  </p>    
  <p> With my knowledge learned from this course I will be able to create and manage
      new web developments that use the latest technology.         
  </p>
  
    </section>
  );
}

export default AboutMe;