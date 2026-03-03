import './App.css';
import React from 'react';
import Header from './comp/header/Header.jsx';
import Top from './comp/top/Top.jsx';
import Navi from './comp/nav/Navi.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './comp/home/Home.jsx';
import Contact from './comp/contact/Contact.jsx';
import Foot from './comp/foot/Foot.jsx';
import News from './comp/news/News.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Top />
      <Header />
      
      <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>  
      <Foot />
    </div>
  );
}

export default App;