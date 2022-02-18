import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Nav from "../../components/Nav";
import aboutMe from "../../components/aboutMe";
import portfolio from "../../components/portfolio";
import contact from '../../components/contact';
import resume from '../../components/resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Nav />
        </header>

        <div className="content">
          {/* <Route exact path="/" render={() => <Redirect to="/aboutMe" />} /> */}
          <Route path="/aboutMe" component={aboutMe} />
          <Route path="/portfolio" component={portfolio} />
          <Route path="/contact" component={contact}/>
          <Route path="/resume" component={resume}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;