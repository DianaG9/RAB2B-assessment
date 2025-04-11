import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './styles/_App.scss'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
