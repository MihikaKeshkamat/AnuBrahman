import React from 'react';
import NavBar from './NavBar';
import './App.css';

import Astronomy from './pages/Astronomy.js';
import Astrophysics from './pages/Astrophysics.js';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import QuantumPhysics from './pages/QuantumPhysics.js';
import Mathematics from './pages/Mathematics.js';
import Defense from './pages/Defense.js';
import IndianOrg from './pages/IndianOrg.js';
import Aviation from './pages/Aviation.js';
import AncientAvi from './pages/AncientAvi.js';
import SpaceExplore from './pages/SpaceExplore.js';
import SpecialSeries from './pages/SpecialSeries.js';
import Login from './Login.js';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='*' element={<NavBar/>}></Route>
          <Route path='/Astronomy' element={<Astronomy/>}></Route>
          <Route path='/Astrophysics' element={<Astrophysics/>}></Route>
          <Route path='/QuantumPhysics' element={<QuantumPhysics/>}></Route>
          <Route path='/Mathematics' element={<Mathematics/>}></Route>
          <Route path='/Defense' element={<Defense/>}></Route>
          <Route path='/IndianOrg' element={<IndianOrg/>}></Route>
          <Route path='/Aviation' element={<Aviation/>}></Route>
          <Route path='/AncientAvi' element={<AncientAvi/>}></Route>
          <Route path='/SpaceExplore' element={<SpaceExplore/>}></Route>
          <Route path='/SpecialSeries' element={<SpecialSeries/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
