import './App.css';
import React from 'react';
import Header from './comp/header/Header.jsx';
import Top from './comp/top/Top.jsx';
import Navi from './comp/nav/Navi.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './comp/contact/Contact.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Top />
      <Header />
      
      <Navi />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;