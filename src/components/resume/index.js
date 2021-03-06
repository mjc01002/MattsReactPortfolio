import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Mathew Calkins</h2>
          <p>
              Proficent in enterpirse content management, full-stack web
              development, data architecture, and managing integrations.
          </p>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/mathew-calkins-pe-78b25555/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          
            
          </p>

          <a
            href="https://github.com/mjc01002/MattsReactPortfolio/raw/main/portfolio/src/assets/resume.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <p>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;