import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './layouts/home';
import Services from './layouts/Services';
import Software from './layouts/Software';
import Portfolio from './layouts/Portfolio';
import About from './layouts/About';
import Contact from './layouts/Contact';
import Blog from './layouts/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //All the Routes to the different pages here
  <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="Software" element={<Software />} />
          <Route path="About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
