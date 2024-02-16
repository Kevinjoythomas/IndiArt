import './App.css';
import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { States } from './Components/States/States';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import AP from './Components/States/AP/AP'
import Karnataka from './Components/States/Karnataka/Karnataka'
import Kerela from './Components/States/Kerela/Kerala'
import Maharashtra from './Components/States/Maharashtra/Maharashtra'
import Odisha from './Components/States/Odisha/Odisha'
import Rajasthan from './Components/States/Rajasthan/Rajasthan'
import TamilNadu from './Components/States/TamilNadu/TamilNadu'
function App() {
  const stateNames=["AP", "Karnataka", "Kerela", "Maharashtra", "Odisha", "Rajasthan", "TamilNadu"]

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>

              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/States" element={<States />} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
