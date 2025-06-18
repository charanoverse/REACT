import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Helloworld from "./Helloworld";
import './App.css'
import Props from './Props.js'
import Details from './Details.jsx';
import LoginComponent from './LoginComponent.js'

function App() {
  return (
    <div>
      {/* <First></First>
      <Second></Second> */}
    <Router>
      <Routes>
        <Route path="/hello" element={<Helloworld/>}/>
        <Route path="/props" element={<Props/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/login" element={<LoginComponent/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
