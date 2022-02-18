import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "../../components/Nav";
import AboutMe from "../../components/aboutMe";
import Portfolio from "../../components/portfolio";
import Contact from '../../components/contact';
import Resume from '../../components/resume';


class Header extends Component {
  render() {
    return (
        <BrowserRouter>
        <header>
          <Nav />
        </header>
        
        <div className="content">
            <Routes>
          <Route exact path="/" render={() => <Navigate to="/aboutMe" />}/>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/resume" element={<Resume />}/>
            </Routes>
        </div>

        </BrowserRouter>
      
    );
  }
}

export default Header;