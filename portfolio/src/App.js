import React from 'react';
import AboutMe from './components/aboutMe';
import Nav from './components/Nav';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <AboutMe></AboutMe>
      </main>
    </div>
  );
}

export default App;
