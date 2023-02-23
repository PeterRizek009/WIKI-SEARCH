import React from 'react';
import { useState } from 'react';
import SearchApp from './component/searchapp/searchapp.jsx';
import About from './component/about/about.jsx';
import SavedSearches from './component/savedsearches/savedsearches';
import Navbar from './component/navbar/navbar.jsx';
import Footer from './component/footer/footer.jsx';
import {Routes, Route } from "react-router-dom";
import './app.css'


const App = () => {
        const[saved , setSaved]= useState([]);

  return (
  <>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<SearchApp saved={saved}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/savedsearches" element={<SavedSearches saved={saved}/>} />
        </Routes >
      
    </div >
    <Footer/>
        </>
  );
}

export default App;
