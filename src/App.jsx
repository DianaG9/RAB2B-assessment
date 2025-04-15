import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './styles/_App.scss'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app_container">
        <Navbar />
        <main className="main_content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
