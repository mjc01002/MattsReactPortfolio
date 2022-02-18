import React from 'react';
import coverImage from '../../assets/cover/portfolioImage.jpg';
import headShot from '../../assets/Photo/headshot.heic';

function AboutMe() {
  return (
    <section className="my-5">
  <h1 id="aboutMe">Who am I?</h1>
  <img src= {headShot} className="my-2" style={{ width: "25%" }} alt="cover" />
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default AboutMe;