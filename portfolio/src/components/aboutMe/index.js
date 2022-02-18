import React from 'react';
import coverImage from '../../assets/cover/portfolioImage.jpg'

function AboutMe() {
  return (
    <section className="my-5">
  <h1 id="aboutMe">Who am I?</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default AboutMe;