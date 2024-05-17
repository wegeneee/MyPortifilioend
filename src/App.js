import React from 'react'
import AppRouter from './AppRouter'
import Hero from './Component/Hero/hero'
import Skill from  '../src/Component/Skill/Skill'
import WorkExpriance from './Component/WorkExpriance/WorkExpriance'
import ContactMe from './Component/ContactMe/ContactMe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'


function App() {
  return (
    <div className="App">
     <Router>     
        <Navbar />

     <Routes>

      <Route path='/'  element={<AppRouter/>}/>
      <Route path='/home'  element={<Hero/>}/>
      <Route path='/skill'  element={<Skill/>}/>
      <Route path='/expriance'  element={<WorkExpriance/>}/>
      <Route path='/contactme'  element={<ContactMe/>}/>
     
     </Routes>
    
     </Router>
    </div>
  );
}

export default App;