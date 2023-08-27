import React, { useState, useEffect } from 'react';
import Home from './components/views/Home';
import './App.css'
// import Sidebar from './components/layouts/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:id' element={<Home/>} />

        </Routes>
      </BrowserRouter>
      {/* <Sidebar/> */}
    </div>

  );
}

export default App;