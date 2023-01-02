import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import './app.css'
import { useState } from 'react'
import Menu from './components/menu/Menu'

const App = () => {
  const [menuOpen, setMenuOpen] = useState("")
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Testimonials />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
