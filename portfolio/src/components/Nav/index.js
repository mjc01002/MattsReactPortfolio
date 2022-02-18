import React from 'react';

function Nav() {

  return (
    <header>
  <h2>
    <a href="/">
      {/* <span role="img" aria-label="camera"> 📸</span> Oh Snap! */}
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Portfolio</span>
      </li>
      <li>
        <span>Resume</span>
      </li>
      <li>
        <span>Contact Me</span>
      </li>
    </ul>
  </nav>
</header>
  );
}

export default Nav;