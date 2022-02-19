import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cover from './assets/cover/portfolioImage.jpg';


function App() {
  return (
    <div>
      
      <Header />
      <img src={cover} alt="cover"/>
      <Footer/>
  
    </div>
  );
}

export default App;
