
import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
        <Navbar/>    
        <Routes>
          <Route path="/" element={<News key="general" pageSize={6} category="general"/>} />
          <Route path="/business" element={<News key="business" pageSize={6} category="business"/>} />
          <Route path="/general" element={<News key="general" pageSize={6} category="general"/>} />
          <Route path="/health" element={<News key="health" pageSize={6} category="health"/>} />
          <Route path="/science" element={<News key="science" pageSize={6} category="science"/>} />
          <Route path="/sports" element={<News key="sports" pageSize={6} category="sports"/>} />
          <Route path="/technology" element={<News key="technology" pageSize={6} category="technology"/>} />
          </Routes>
          </Router>
      </div>
    )
  }
}

