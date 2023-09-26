import React from 'react';
import Navbar from './Navbar';
import HP from './HomePage';
import Footer from './Footer';
import FAQ from './Faq';
import { Router, Route, Link } from 'react-router-dom'

function App() {
    return (
      <div>
        <Navbar/>
        <HP/>
        <Footer/>
      </div>
    );
  }

export default App