import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faIdBadge } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

library.add(fab, faIdBadge, faCoffee);

const App = () => {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
